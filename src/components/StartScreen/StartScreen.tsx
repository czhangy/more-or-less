// Stylesheet
import styles from "./StartScreen.module.scss";
// React
import { useEffect, useState } from "react";

type Props = {
    onStart: () => void;
};

const StartScreen: React.FC<Props> = ({ onStart }) => {
    // Page state
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Trigger initial fade in
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Handle start button press
    const handleClick = () => {
        setIsLoaded(false);
        setTimeout(() => onStart(), 900);
    };

    return (
        <div
            className={`${styles["start-screen"]} ${
                isLoaded ? styles.show : ""
            }`}
        >
            <div id="welcome-text" className={styles["welcome-text"]}>
                How well do you know NBA stats?
            </div>
            <button
                id="start-button"
                className={styles["start-button"]}
                onClick={handleClick}
            >
                START!
            </button>
        </div>
    );
};
export default StartScreen;
