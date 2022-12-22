// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/Home.module.scss";
// React
import { useState } from "react";
// Components
import StartScreen from "@/components/StartScreen/StartScreen";

const Home: NextPage = () => {
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
            {isStarted ? "" : <StartScreen onStart={startGame} />}
        </div>
    );
};

export default Home;
