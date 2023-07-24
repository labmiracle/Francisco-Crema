import { useContext } from "react";
import LanguageContext, { Language } from "../LanguageContext/LanguageContext";

export default function Button({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) {
  const language = useContext(LanguageContext);

  function onClickHandler() {
    setLanguage(language === "es" ? "en" : "es");
  }

  return (
    <button onClick={onClickHandler}>
      {language === "es" ? "Cambiar idioma" : "Change language"}
    </button>
  );
}
