# Wagner Driver (i18n) — Gulf Shores, AL

Next.js 14 (App Router) + Tailwind com **idiomas EN/PT/ES**.
- Prefixos de rota: `/en`, `/pt`, `/es`
- `middleware.ts` redireciona `/` para `/en`
- Troca de idioma no Header (dropdown)

## Rodar
```bash
npm install
npm run dev
```

## Editar textos
- Traduções: `i18n/dictionaries/{en,pt,es}.json`
- Telefone/E-mail: `app/[locale]/(marketing)/page.tsx`
