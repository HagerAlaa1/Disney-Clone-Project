import React, { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    value: "en",
    text: "English",
  },
  {
    value: "ar",
    text: "العربية",
  },
];
function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language ||"en");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>

      <select value={lang} onChange={handleChange}>
        {languages.map((l) => (
          <option key={l.value} value={l.value}>
            {l.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitch;
