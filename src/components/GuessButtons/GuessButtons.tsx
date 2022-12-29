// Stylesheet
import styles from "./GuessButtons.module.scss";

type Props = {
    fade: boolean;
    onGuess: (guess: boolean) => void;
};

const GuessButtons: React.FC<Props> = ({ fade, onGuess }: Props) => {
    return (
        <div className={`${styles["guess-buttons"]} ${fade ? "hide" : "show"}`}>
            <button
                className={styles["guess-button"]}
                onClick={() => onGuess(true)}
                disabled={fade}
            >
                MORE
            </button>
            <p>OR</p>
            <button
                className={styles["guess-button"]}
                onClick={() => onGuess(false)}
                disabled={fade}
            >
                LESS
            </button>
        </div>
    );
};

export default GuessButtons;
