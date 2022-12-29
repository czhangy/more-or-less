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
// Components
import GuessButtons from "@/components/GuessButtons/GuessButtons";

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
    const [fadePlayers, setFadePlayers] = useState<boolean>(true);
    const [fadeButtons, setFadeButtons] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    const [currentStat, setCurrentStat] = useState<string>("");

    // Component typing
    const isKnownCard: boolean = onGuess === undefined;

    // Swap player on card
    useEffect(() => {
        // Fade players out of frame
        setFadePlayers(true);
        // Resets fade container to buttons, delay to prevent visible change
        setTimeout(() => {
            setFadeButtons(false);
        }, 1000);
        // Sets player info once data is not visible
        setTimeout(() => {
            setTeam(getTeamData(player.team));
            setCurrentPlayer(player);
            setCurrentStat(stat);
            setFadePlayers(false);
        }, 1500);
    }, [player]);

    // Get a player's stat and format it
    const getStat = () => {
        return (currentPlayer![currentStat as keyof Player] as number).toFixed(
            1
        );
    };

    // Check to see if guess was correct
    const checkGuess = (guess: boolean) => {
        // Fades buttons to reveal answer
        setFadeButtons(true);
        // Check averages
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
        // Call back to game screen for logic
        onGuess!(correct);
    };

    return (
        <>
            {currentPlayer && team ? (
                <div
                    className={`${styles["player-card"]} ${
                        isKnownCard
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
                            fadePlayers ? "hide" : styles["show-logo"]
                        }`}
                    >
                        <Image
                            src={team.logo}
                            alt={`${player.team} logo`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    {isKnownCard ? (
                        <div
                            className={`${styles["card-text-container"]} ${
                                fadePlayers ? "hide" : "show"
                            }`}
                        >
                            <strong>{currentPlayer.name}</strong>
                            <p>AVERAGES</p>
                            <strong className={styles.stat}>{getStat()}</strong>
                            <p>{currentStat}</p>
                        </div>
                    ) : (
                        <div
                            className={`${styles["card-text-container"]} ${
                                fadePlayers ? "hide" : "show"
                            }`}
                        >
                            <strong>{currentPlayer.name}</strong>
                            <p>AVERAGES</p>
                            <div className={styles["fade-container"]}>
                                <GuessButtons
                                    fade={fadeButtons}
                                    onGuess={checkGuess}
                                />
                                <strong
                                    className={`${styles.stat} ${
                                        fadeButtons ? "show" : "hide"
                                    }`}
                                >
                                    {getStat()}
                                </strong>
                            </div>
                            <p>{currentStat}</p>
                        </div>
                    )}
                    <div
                        className={`${styles["player-headshot"]} ${
                            fadePlayers ? "hide" : "show"
                        }`}
                    >
                        <Image
                            src={currentPlayer.headshot}
                            alt={currentPlayer.name}
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
