import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [calval, setCalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      setCalval(eval(calval));
    } else {
      let newDisplayvalue = calval + buttonText;
      setCalval(newDisplayvalue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <ButtonContainer
        ButtonNames={ButtonNames}
        onButtonClick={onButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
