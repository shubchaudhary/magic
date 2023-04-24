import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            setIsLoading(true);
            NProgress.start();
        };
        const handleComplete = () => {
            setIsLoading(false);
            NProgress.done();
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, []);

    return (
        <>
            <Head>
                <title>MAGIC LAND</title>
                <meta name="information" content="Puzzle website for e-litmus" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <ToastContainer />
            {isLoading && (
                <div className="nprogress-custom-parent">
                    <div className="nprogress-custom-bar" />
                </div>
            )}
            <Footer />
        </>
    );
}
