// React
import { useEffect, useState } from "react";
// Next
import Image from "next/image";

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
        <div className={`trigger-screen ${isLoaded ? "show" : "hide"}`}>
            <strong>FINAL SCORE: {score}</strong>
            <p>Run it back?</p>
            <button className="pill-button" onClick={handleClick}>
                <div className="game-icon img">
                    <Image
                        src="/assets/icons/restart.svg"
                        alt="Restart icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p>RESTART</p>
            </button>
        </div>
    );
};

export default GameOverScreen;
