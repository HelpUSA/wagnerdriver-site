# backend/main.py

from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
from aiosmtplib import SMTP
from email.message import EmailMessage
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="Wagner Driver - Email API")

# 🔐 Ajuste o(s) domínio(s) do seu site aqui, se quiser restringir CORS
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in ALLOWED_ORIGINS],
    allow_methods=["*"],
    allow_headers=["*"],
)

def _require_env(name: str) -> str:
    v = os.getenv(name)
    if not v:
        raise RuntimeError(f"Variável de ambiente ausente: {name}")
    return v

@app.post("/send-email")
async def send_email(
    nome: str = Form(...),
    email: EmailStr = Form(...),
    mensagem: str = Form(...)
):
    # 🔧 Carrega e valida envs
    EMAIL_HOST = _require_env("EMAIL_HOST")
    EMAIL_PORT = int(_require_env("EMAIL_PORT"))
    EMAIL_USERNAME = _require_env("EMAIL_USERNAME")
    EMAIL_PASSWORD = _require_env("EMAIL_PASSWORD")
    EMAIL_RECEIVER = _require_env("EMAIL_RECEIVER")  # pode ser 1 ou mais, separados por vírgula

    # Suporta múltiplos destinatários
    destinatarios = [addr.strip() for addr in EMAIL_RECEIVER.split(",") if addr.strip()]

    # ✉️ Corpo simples (texto puro)
    corpo_msg = (
        f"Novo contato pelo site Wagner Driver\n\n"
        f"Nome: {nome}\n"
        f"E-mail: {email}\n\n"
        f"Mensagem:\n{mensagem}\n"
    )

    # --- Email para Wagner Driver (destinatário interno) ---
    msg_interna = EmailMessage()
    msg_interna["Subject"] = f"[Wagner Driver] Novo contato de {nome}"
    msg_interna["From"] = f"Wagner Driver <{EMAIL_USERNAME}>"
    msg_interna["To"] = ", ".join(destinatarios)
    msg_interna["Reply-To"] = str(email)
    msg_interna.set_content(corpo_msg)
    msg_interna.set_charset("utf-8")

    # --- Confirmação para o cliente ---
    msg_cliente = EmailMessage()
    msg_cliente["Subject"] = "Recebemos sua mensagem - Wagner Driver"
    msg_cliente["From"] = f"Wagner Driver <{EMAIL_USERNAME}>"
    msg_cliente["To"] = str(email)
    msg_cliente.set_content(
        f"Olá {nome},\n\n"
        "Obrigado por entrar em contato com o Wagner Driver. "
        "Recebemos sua mensagem e retornaremos em breve.\n\n"
        "Resumo do seu contato:\n"
        f"{corpo_msg}\n"
        "Atenciosamente,\n"
        "Equipe Wagner Driver"
    )
    msg_cliente.set_charset("utf-8")

    # 📨 Envio (SMTP com STARTTLS)
    try:
        smtp = SMTP(hostname=EMAIL_HOST, port=EMAIL_PORT, start_tls=True, timeout=30)
        await smtp.connect()
        await smtp.login(EMAIL_USERNAME, EMAIL_PASSWORD)
        await smtp.send_message(msg_interna)
        await smtp.send_message(msg_cliente)
        await smtp.quit()
        return {"success": True, "message": "Mensagem enviada com sucesso!"}
    except Exception as e:
        # Log real recomendado aqui (ex: Sentry / stdout)
        raise HTTPException(status_code=500, detail=f"Falha ao enviar e-mail: {e}")
