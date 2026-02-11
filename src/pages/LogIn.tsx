import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

function LogIn() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language
  return (
    <Button className={`${currentLang === "ar" ? " md:text-md px-2 py-1" : "px-3 py-2 md:text-md text-[14px] "}`}>
      <span>{t("hero.log")}</span>
    </Button>
  )
}

export default LogIn
