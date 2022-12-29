// React
import { useEffect, useState } from "react";
// Next
import Image from "next/image";

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
        <div className={`trigger-screen ${isLoaded ? "show" : "hide"}`}>
            <h3>Think you're a true NBA stathead?</h3>
            <button className="pill-button" onClick={handleClick}>
                <div className="game-icon img">
                    <Image
                        src="/assets/icons/start.svg"
                        alt="Restart icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p>START!</p>
            </button>
        </div>
    );
};
export default StartScreen;
