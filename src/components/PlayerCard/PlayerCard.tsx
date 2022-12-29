// Stylesheet
import styles from "./PlayerCard.module.scss";
// TS
import Player from "@/models/Player";
import Team from "@/models/Team";
// Util
import { getTeamData } from "@/utils/team-map";
// React
import { useEffect, useState } from "react";
// Next
import Image from "next/image";

type Props = {
    player: Player;
    stat: string;
    onGuess?: (guess: boolean) => void;
    knownPlayer?: Player;
};

const PlayerCard: React.FC<Props> = ({
    player,
    stat,
    onGuess,
    knownPlayer,
}) => {
    // Team state
    const [team, setTeam] = useState<Team | null>(null);

    // Card state
    const [fadePlayers, setFadePlayers] = useState<boolean>(false);
    const [fadeButtons, setFadeButtons] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    const [currentStat, setCurrentStat] = useState<string>("");

    // Initialize card
    useEffect(() => {
        setFadePlayers(false);
        setTimeout(() => {
            setFadeButtons(false);
        }, 1000);
        setTimeout(() => {
            setTeam(getTeamData(player.team));
            setCurrentPlayer(player);
            setCurrentStat(stat);
            setFadePlayers(true);
        }, 1500);
    }, [player]);

    // Check to see if guess was correct
    const checkGuess = (guess: boolean) => {
        setFadeButtons(true);
        let correct: boolean;
        if (guess) {
            correct =
                currentPlayer![currentStat as keyof Player] >
                knownPlayer![currentStat as keyof Player];
        } else {
            correct =
                currentPlayer![currentStat as keyof Player] <
                knownPlayer![currentStat as keyof Player];
        }
        onGuess!(correct);
    };

    return (
        <>
            {currentPlayer && team ? (
                <div
                    className={`${styles["player-card"]} ${
                        onGuess === undefined
                            ? styles["known-card"]
                            : styles["unknown-card"]
                    }`}
                >
                    <div
                        className={styles["card-bg"]}
                        style={{
                            backgroundColor: team.color,
                        }}
                    />
                    <div
                        className={`${styles["team-logo"]} ${
                            fadePlayers ? styles.show : ""
                        }`}
                    >
                        <Image
                            src={team.logo}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    {!onGuess ? (
                        <div
                            className={`${styles["card-text-container"]} ${
                                fadePlayers ? styles.show : ""
                            }`}
                        >
                            <strong className={styles["card-text"]}>
                                {currentPlayer.name}
                            </strong>
                            <p className={styles["card-text"]}>AVERAGES</p>
                            <p className={styles["card-text"]}>
                                {`${(
                                    currentPlayer[
                                        currentStat as keyof Player
                                    ] as number
                                ).toFixed(1)} ${currentStat}`}
                            </p>
                        </div>
                    ) : (
                        <div
                            className={`${styles["card-text-container"]} ${
                                fadePlayers ? styles.show : ""
                            }`}
                        >
                            <strong className={styles["card-text"]}>
                                {currentPlayer.name}
                            </strong>
                            <p className={styles["card-text"]}>AVERAGES</p>
                            <div className={styles["fade-container"]}>
                                <div
                                    className={`${styles["guess-buttons"]} ${
                                        fadeButtons ? styles["fade-left"] : ""
                                    }`}
                                >
                                    <button
                                        className={styles["guess-button"]}
                                        onClick={() => checkGuess(true)}
                                        disabled={fadeButtons}
                                    >
                                        MORE
                                    </button>
                                    <p className={styles["card-text"]}>OR</p>
                                    <button
                                        className={styles["guess-button"]}
                                        onClick={() => checkGuess(false)}
                                        disabled={fadeButtons}
                                    >
                                        LESS
                                    </button>
                                </div>
                                <strong
                                    className={`${styles.answer} ${
                                        fadeButtons
                                            ? styles["appear-right"]
                                            : ""
                                    }`}
                                >
                                    {(
                                        currentPlayer[
                                            currentStat as keyof Player
                                        ] as number
                                    ).toFixed(1)}
                                </strong>
                            </div>
                            <p className={styles["card-text"]}>{currentStat}</p>
                        </div>
                    )}
                    <div
                        className={`${styles["player-headshot"]} ${
                            fadePlayers ? styles.show : ""
                        }`}
                    >
                        <Image
                            src={currentPlayer.headshot}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default PlayerCard;
