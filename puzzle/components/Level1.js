import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { base } from "../handler/base";

const LevelOne = () => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [score, setUserScore] = useState(2);
    const [level, setUserLevel] = useState(2);
    const correctAnswer = "tree";

    const handleSubmitClick = () => {
        if (answer.toLocaleLowerCase() === correctAnswer) {
            toast.success("Correct answer! Your level has been updated.");
            setUserLevel(2);
            setUserScore(2);
            const token = localStorage.getItem("SiteToken");
            axios
                .post(
                    `${base}/api/update`,
                    {
                        level,
                        score,
                        token,
                    },
                    {
                        headers: {
                            "content-type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    const data = response.data;
                    if (data.status === "200") {
                        toast("Updating successful");
                    } else {
                        toast.error("Updating Failed.");
                    }
                    router.reload();
                })
                .catch((error) => {
                    toast.error("Something went wrong");
                });
            router.reload();
        } else {
            toast.error("Wrong answer. Please try again.");
        }
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    return (
        <div>
            <p className="absolute left-4 top-4 bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                Level 1: The Forest of Enchantment
            </p>

            <div className="content bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                <p className="text-2xl text-orange-700 font-bold mb-6 text-center">
                    In the forest of enchantment, you have to solve a riddle to find a hidden key that would unlock the
                    next level.
                </p>
                <p className="text-lg text-white font-bold mb-6 text-center w-72">
                    " I am tall and strong, but have no arms or legs. I stand still and silent, but I am always
                    watching. What am I? "
                </p>
                <input
                    className="bg-gray-100 text-gray-800 shadow-md border-2 focus:outline-none rounded-xl px-3 py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    type="text"
                    value={answer}
                    placeholder="Answer"
                    onChange={handleAnswerChange}
                />
                <div className="flex flex-row pt-10">
                    <Link
                        href="https://www.google.com/search?q=tree&sxsrf=APwXEdc_Fw1q1vKFMxOoWC3TC9AhOnB3PQ:1682239014661&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixsJXXzL_-AhXByzgGHbdHAbEQ_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=EYP9POM3pD2qtM"
                        target="_blank"
                    >
                        <button className="bg-orange-700 hover:bg-orange-400  text-white mx-5 px-5 py-3 rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out">
                            Clues
                        </button>
                    </Link>
                    <button
                        className="bg-orange-700 hover:bg-orange-400  text-white mx-5 px-5 py-3 rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LevelOne;
