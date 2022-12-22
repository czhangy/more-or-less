// Stylesheet
import "@/styles/globals.scss";
// TS
import type { AppProps } from "next/app";
// Nav components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
