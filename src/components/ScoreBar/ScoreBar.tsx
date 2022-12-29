// Stylesheet
import styles from "./ScoreBar.module.scss";

type Props = {
    score: number;
    highScore: number;
};

const ScoreBar: React.FC<Props> = ({ score, highScore }: Props) => {
    return (
        <div className={styles["score-bar"]}>
            <div className={`${styles.scores} center`}>
                <p>HIGH SCORE: {highScore}</p>
                <p>SCORE: {score}</p>
            </div>
        </div>
    );
};

export default ScoreBar;
