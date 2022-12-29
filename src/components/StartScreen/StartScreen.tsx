// React
import { useEffect, useState } from "react";

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
            <h3>How well do you know NBA stats?</h3>
            <button className="pill-button" onClick={handleClick}>
                START!
            </button>
        </div>
    );
};
export default StartScreen;
