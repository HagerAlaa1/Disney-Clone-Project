import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;

  return (
    <main>
      <section className="flex justify-center items-center flex-col h-screen">
        <div className="w-30 md:w-55 cursor-pointer">
          <img
            src="/public/images/disney-plus-logo.webp"
            alt="disney-plus-logo"
          />
        </div>
        <div className="flex justify-center items-center text-center w-50 md:w-130 mt-6 ">
          <h1 className="text-[20px] md:text-[28px] font-semibold leading-7 md:leading-9 tracking-[-0.2px] md:tracking-[-0.4px]">
            {t("hero.hero title")}
          </h1>
        </div>
        <div className="w-60 md:w-55 mt-6 text-center hover:scale-110 transition-transform delay-100 duration-300">
          <Button className="w-full h-12 font-semibold leading-5 flex justify-center gap-2">
            <span className={`${currentLang === "ar" ? "text-[16px]" : ""}`}>
              {t("hero.start button")}
            </span>
            <ChevronRight />
          </Button>
        </div>
        <div className="mt-3 h-12 flex justify-center items-center">
          <a href="#" target="_blank">
            <button className="px-6 sm:px-60 lg:px-95">
              <span
                className={`${currentLang === "ar" ? "text-[14px]" : "text-[12px]"} text-white font-semibold`}
              >
                {t("hero.subscribe")}
              </span>
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Hero;
