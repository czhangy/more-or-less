// Stylesheet
import styles from "./GameScreen.module.scss";
// React
import { useEffect, useState } from "react";
// TS
import Player from "@/models/Player";
// API
import axios from "axios";
import PlayerCard from "../PlayerCard/PlayerCard";

type Props = {
    playerNames: string[];
    onGameOver: (score: number) => void;
};

const GameScreen: React.FC<Props> = ({ playerNames, onGameOver }: Props) => {
    // Stat state
    const [currentStat, setCurrentStat] = useState<string | null>(null);
    // Player states
    const [knownPlayer, setKnownPlayer] = useState<Player | null>(null);
    const [unknownPlayer, setUnknownPlayer] = useState<Player | null>(null);
    // Game state
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const [gameStart, setGameStart] = useState<boolean>(false);

    // Initialize game
    useEffect(() => {
        initGame();
    }, []);

    // Get a random player name
    const generateRandomPlayer = () => {
        return playerNames[Math.floor(Math.random() * playerNames.length)];
    };

    // Get a random stat
    const generateRandomStat = () => {
        const stats = ["mpg", "ppg", "rpg", "apg", "bpg", "spg"];
        return stats[Math.floor(Math.random() * stats.length)];
    };

    // Get player data
    const fetchPlayer = async (player: string) => {
        try {
            const response = await axios.get("/api/players", {
                params: { name: player },
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    };

    // Initialize game
    const initGame = async () => {
        // Fetch high score from local storage
        const prevHighScore = localStorage.getItem("highscore");
        if (prevHighScore) {
            setHighScore(parseInt(prevHighScore));
        }
        // Randomly select stat
        const initialStat = generateRandomStat();
        // Randomly select 2 players
        const knownName: string = generateRandomPlayer();
        let unknownName: string = generateRandomPlayer();
        // Fetch players from DB
        let player1, player2;
        const knownPromise = fetchPlayer(knownName).then(
            (data: Player) => (player1 = data)
        );
        const unknownPromise = fetchPlayer(unknownName).then(
            (data: Player) => (player2 = data)
        );
        await Promise.all([knownPromise, unknownPromise]);
        // Reset until players are valid
        while (
            !validatePlayers(player1 as unknown as Player, player2, initialStat)
        ) {
            unknownName = generateRandomPlayer();
            player2 = await fetchPlayer(unknownName);
        }
        // Set state
        setCurrentStat(initialStat);
        setKnownPlayer(player1 as unknown as Player);
        setUnknownPlayer(player2);
        setGameStart(true);
    };

    // Handle guess logic
    const handleGuess = async (correct: boolean) => {
        if (correct) {
            // Increment the score
            if (score + 1 > highScore) {
                setHighScore(score + 1);
                localStorage.setItem("highscore", (score + 1).toString());
            }
            setScore(score + 1);
            // Change the stat
            const nextStat = generateRandomStat();
            // Load next player
            let nextPlayer: Player | null = null;
            while (
                !nextPlayer ||
                !validatePlayers(nextPlayer, unknownPlayer!, nextStat)
            ) {
                const nextName = generateRandomPlayer();
                nextPlayer = await fetchPlayer(nextName);
            }
            setTimeout(() => {
                setCurrentStat(nextStat);
                setKnownPlayer(unknownPlayer);
                setUnknownPlayer(nextPlayer);
            }, 1500);
        } else {
            setTimeout(() => {
                setGameStart(false);
            }, 2500);
            setTimeout(() => {
                onGameOver(score);
            }, 4000);
        }
    };

    // Make sure players are valid
    const validatePlayers = (
        player1: Player,
        player2: Player,
        stat: string
    ) => {
        // Players cannot be the same
        if (player1.name === player2.name) return false;
        // Player seasons must be the same
        if (player1.recentSeason !== player2.recentSeason) return false;
        // Current stat cannot be tied
        if (
            player1[stat as keyof typeof player1] ===
            player2[stat as keyof typeof player2]
        ) {
            return false;
        }
        return true;
    };

    return (
        <div
            className={`${styles["game-screen"]} ${
                gameStart ? styles.show : ""
            }`}
        >
            <div className={styles["scores-container"]}>
                <div className={styles.scores}>
                    <p>HIGH SCORE: {highScore}</p>
                    <p>SCORE: {score}</p>
                </div>
            </div>
            {knownPlayer && unknownPlayer ? (
                <>
                    <PlayerCard player={knownPlayer} stat={currentStat!} />
                    <PlayerCard
                        player={unknownPlayer}
                        stat={currentStat!}
                        onGuess={handleGuess}
                        knownPlayer={knownPlayer}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default GameScreen;
