import React from "react";
import styles from "../styles/register.module.css";
import Link from "next/link";

function Home() {
    return (
        <>
            <div
                className={
                    styles.background +
                    " min-h-screen flex flex-col justify-center items-center overflow-auto bg-opacity-10"
                }
            >
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-900 bg-opacity-50">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full">
                        <div className="md:w-1/2 p-10">
                            <h1 className="text-4xl text-orange-600 font-bold mb-6">Welcome to the Magic Land</h1>
                            <p className="text-lg mb-6 text-white">
                                Once upon a time, in a magical land, there was a wizard named Orin who had been tasked
                                with protecting a powerful crystal that could grant wishes. One day, while Orin was
                                away, an evil sorcerer named Valtor sneaked into Orin's castle and stole the crystal.
                                <br />
                                <br />
                                Help Orin find the crystal.
                            </p>
                            <Link href="/login">
                                <button className=" bg-orange-700 hover:bg-black hover:text-orange-700 text-white font-bold py-4 px-8 rounded">
                                    Play
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/wizard.png" alt="Riddle" className=" h-96 w-full object-scale-down rounded-md" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;
