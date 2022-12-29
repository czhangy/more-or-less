// Stylesheet
import styles from "./StartScreen.module.scss";

type Props = {
    onStart: () => void;
};

const StartScreen: React.FC<Props> = ({ onStart }) => {
    const onClick = () => {
        document
            .getElementById("welcome-text")!
            .classList.add(styles["text-fade-out"]);
        document
            .getElementById("start-button")!
            .classList.add(styles["button-fade-out"]);
        setTimeout(() => onStart(), 900);
    };

    return (
        <div className={styles["start-screen"]}>
            <div id="welcome-text" className={styles["welcome-text"]}>
                How well do you know NBA stats?
            </div>
            <button
                id="start-button"
                className={styles["start-button"]}
                onClick={onClick}
            >
                START!
            </button>
        </div>
    );
};
export default StartScreen;
