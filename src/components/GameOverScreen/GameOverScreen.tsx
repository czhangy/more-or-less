// Stylesheet
import styles from "./GameOverScreen.module.scss";
// React
import { useEffect, useState } from "react";

type Props = {
    score: number;
    onRestart: () => void;
};

const GameOverScreen: React.FC<Props> = ({ score, onRestart }: Props) => {
    // Page state
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Trigger initial fade in
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Handle restart button press
    const handleClick = () => {
        setIsLoaded(false);
        setTimeout(() => onRestart(), 900);
    };

    return (
        <div
            className={`${styles["game-over-screen"]} ${
                isLoaded ? styles.show : ""
            }`}
        >
            <strong className={styles["game-over-text"]}>SCORE: {score}</strong>
            <p className={styles["game-over-text"]}>Run it back?</p>
            <button className={styles["restart-button"]} onClick={handleClick}>
                RESTART!
            </button>
        </div>
    );
};

export default GameOverScreen;
