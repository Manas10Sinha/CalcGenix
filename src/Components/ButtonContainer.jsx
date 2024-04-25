import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ ButtonNames, onButtonClick }) => {
  return (
    <div className={styles.buttonContainer}>
      {ButtonNames.map((ButtonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(ButtonName)}
        >
          {ButtonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
