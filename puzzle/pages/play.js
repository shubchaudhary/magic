import React from "react";
import styles from "../styles/register.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import LevelOne from "../components/Level1";
import LevelTwo from "../components/Level2";
import LevelThree from "../components/Level3";
import LevelFour from "../components/Level4";
import LevelFive from "../components/Level5";
import { toast } from "react-toastify";

const Play = () => {
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("SiteToken");
        if (!isAuthenticated) {
            router.push("/login");
        }
        fetch("http://localhost:8080/api/info", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                token: localStorage.getItem("SiteToken"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "error") return toast.error("Error Occurred");
                setLevel(data.userData.level);
                setScore(data.userData.score);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("SiteToken");
        router.push("/");
    };

    if (level === 1) {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                    <LevelOne />;
                </section>
            </>
        );
    } else if (level === 2) {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                    <LevelTwo />;
                </section>
            </>
        );
    } else if (level === 3) {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                    <LevelThree />;
                </section>
            </>
        );
    } else if (level === 4) {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                    <LevelFour />;
                </section>
            </>
        );
    } else if (level === 5) {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                    <LevelFive />;
                </section>
            </>
        );
    } else {
        return (
            <>
                <section
                    className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}
                >
                    <button
                        className="bg-orange-700 text-white hover:text-orange-700 hover:bg-black font-bold py-2 px-4 rounded-full absolute top-4 right-4"
                        onClick={handleClick}
                    >
                        Logout
                    </button>
                    <div className="flex flex-col items-center justify-center">
                        <p class="text-3xl text-center my-2 absolute bg-slate-800 bg-opacity-80 rounded-xl text-orange-700 px-5 py-4 top-14 sm:top-0 sm:rounded-b-xl">{`Score: ${score}`}</p>
                        <div className="bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                            <img src="/crystal.png" alt="Trophy" className="w-48" />
                            <p class="text-lg mt-4 text-white">
                                Only the bravest and most clever adventurers are able to complete the puzzle game and
                                save the kingdom from Valtor's grasp. And Orin, grateful for your help, and gave you the
                                crystal to protect.
                            </p>
                            <h1 className="text-orange-700 text-4xl py-8">You Won!</h1>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default Play;
