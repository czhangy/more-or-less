// Stylesheet
import styles from "./GameScreen.module.scss";
// React
import { useEffect, useState } from "react";
// TS
import Player from "@/models/Player";
// API
import axios from "axios";
// Components
import PlayerCard from "@/components/PlayerCard/PlayerCard";
import ScoreBar from "@/components/ScoreBar/ScoreBar";

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

    // Get a valid unknown player
    const fetchUnknownPlayer = async (knownPlayer: Player, stat: string) => {
        let unknownPlayer: Player | null = null;
        while (
            !unknownPlayer ||
            !validatePlayers(knownPlayer, unknownPlayer, stat)
        ) {
            const unknownName = generateRandomPlayer();
            unknownPlayer = await fetchPlayer(unknownName);
        }
        return unknownPlayer;
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
        setCurrentStat(initialStat);
        // Fetch initial known player
        const knownName: string = generateRandomPlayer();
        const player1: Player = await fetchPlayer(knownName);
        setKnownPlayer(player1);
        // Fetch initial unknown player until valid
        const player2: Player = await fetchUnknownPlayer(player1, initialStat);
        setUnknownPlayer(player2);
        // Set game state
        setGameStart(true);
    };

    // Handle guess logic
    const handleGuess = async (correct: boolean) => {
        if (correct) {
            // Increment the score and save if high score
            const newScore: number = score + 1;
            if (newScore > highScore) {
                setHighScore(score + 1);
                localStorage.setItem("highscore", newScore.toString());
            }
            setScore(newScore);
            // Randomize the stat
            const nextStat: string = generateRandomStat();
            // Load next player
            const nextPlayer: Player = await fetchUnknownPlayer(
                unknownPlayer as Player,
                nextStat
            );
            // Delay to show stat before moving to next player
            setTimeout(() => {
                setCurrentStat(nextStat);
                setKnownPlayer(unknownPlayer);
                setUnknownPlayer(nextPlayer);
            }, 1500);
        } else {
            // Delay to show stat before fading out
            setTimeout(() => {
                setGameStart(false);
            }, 2500);
            // Delay to complete fade out before showing game over screen
            setTimeout(() => {
                onGameOver(score);
            }, 4000);
        }
    };

    // Make sure players are valid to compare
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
                gameStart ? "show" : "hide"
            }`}
        >
            <ScoreBar score={score} highScore={highScore} />
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
