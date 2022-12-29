// TS
import type { NextPage } from "next";
import Player from "@/models/Player";
// Next
import Head from "next/head";
// React
import { useState } from "react";
// Stylesheet
import styles from "@/styles/Home.module.scss";
// DB
import prisma from "@/lib/prisma";
// Components
import StartScreen from "@/components/StartScreen/StartScreen";
import GameScreen from "@/components/GameScreen/GameScreen";
import GameOverScreen from "@/components/GameOverScreen/GameOverScreen";

type Props = {
    playerNames: string[];
};

const Home: NextPage<Props> = ({ playerNames }: Props) => {
    // App state
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const getScreen = () => {
        if (isOver) {
            return (
                <GameOverScreen
                    score={score}
                    onRestart={() => setIsOver(false)}
                />
            );
        } else if (isStarted) {
            return (
                <GameScreen
                    playerNames={playerNames}
                    onGameOver={(score) => {
                        setScore(score);
                        setIsOver(true);
                    }}
                />
            );
        } else {
            return <StartScreen onStart={() => setIsStarted(true)} />;
        }
    };

    return (
        <div className={styles.home}>
            <Head>
                <title>More or Less</title>
            </Head>
            {getScreen()}
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response: { name: string }[] = await prisma.player.findMany({
            select: {
                name: true,
            },
        });
        const playerNames: string[] = response.map((p) => p.name);
        return {
            props: { playerNames },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {},
        };
    }
}

export default Home;
