import { useContext } from "react";
import LanguageContext from "../LanguageContext/LanguageContext";
import Español from "./Español";
import English from "./English";

function MainText() {
  const language = useContext(LanguageContext);

  if (language === "es") {
    return <Español />;
  } else {
    return <English />;
  }
}

export default MainText;
