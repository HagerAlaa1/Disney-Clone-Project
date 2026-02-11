import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", text: "English" },
  { value: "ar", text: "العربية" },
];

function LanguageSwitch() {
  const { t, i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || "en");

  const handleChange = (newLang: string) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center md:min-w-50 rounded-md font-bold bg-[#0F1014] transition cursor-pointer ${
          lang === "ar" ? "gap-4 px-2 py-1" : "gap-2 px-3 py-2"
        }
        ${lang === "ar" ? "text-md" : "text-[14px]"}
        `}
      >
        <span className={`hidden md:block mr-3`}>{t("hero.choose")}</span>
        <span>{languages.find((l) => l.value === lang)?.text}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          } `}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          className={`
            absolute top-full w-24.75 md:w-32 mt-2 md:mt-0 rounded-md bg-[#0F1014] border border-[#0F1014] shadow-lg overflow-hidden z-50
            ${lang === "ar" ? "left-0" : "right-0"}
          `}
        >
          {languages.map((l) => (
            <li
              key={l.value}
              onClick={() => handleChange(l.value)}
              className={`px-4 py-2 cursor-pointer text-center transition-transform hover:scale-105 
                ${
                  lang === l.value
                    ? "md:bg-white/4 text-white"
                    : "hover:bg-white/10"
                }`}
            >
              {l.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitch;
