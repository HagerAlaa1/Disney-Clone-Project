import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = import.meta.env.VITE_I18NEXUS_API_KEY;
const baseUrl = import.meta.env.VITE_I18NEXUS_BASE_URL;

const loadPath = `${baseUrl}/{{lng}}/default.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // The default language
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    // Tt shows the supported languages
    supportedLngs: ["en", "ar"],
    backend: {
      loadPath,
    },
    interpolation: {
      escapeValue: false,
    },
  });
  
i18next.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18next;
