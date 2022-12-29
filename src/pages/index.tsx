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

type Props = {
    playerNames: string[];
};

const Home: NextPage<Props> = ({ playerNames }: Props) => {
    // App state
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const startGame = () => {
        // Delay for animation
        setTimeout(() => setIsStarted(true), 900);
    };

    return (
        <div className={styles.home}>
            <Head>
                <title>More or Less</title>
            </Head>
            {isStarted ? (
                <GameScreen playerNames={playerNames} />
            ) : (
                <StartScreen onStart={startGame} />
            )}
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
