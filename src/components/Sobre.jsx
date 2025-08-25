// FILE: src/components/Sobre.jsx
import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <>
      <section id="sobre" className="py-16 px-6 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t("about.title")}</h2>
          <p className="text-neutral-300 text-lg">{t("about.text1")}</p>
          <p className="mt-4 text-neutral-400">{t("about.text2")}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8">
            <Trans
              i18nKey="about.why.title"
              components={{ c: <span className="text-yellow-600" /> }}
            />
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">
                {t("about.why.comfort.title")}
              </h3>
              <p className="text-gray-600 mt-1">
                {t("about.why.comfort.text")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">
                {t("about.why.punctuality.title")}
              </h3>
              <p className="text-gray-600 mt-1">
                {t("about.why.punctuality.text")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">
                {t("about.why.security.title")}
              </h3>
              <p className="text-gray-600 mt-1">
                {t("about.why.security.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
