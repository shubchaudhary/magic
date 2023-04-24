import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { base } from "../handler/base";

const LevelFive = () => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [score, setUserScore] = useState(10);
    const [level, setUserLevel] = useState(6);
    const correctAnswer = "flag";

    const handleSubmitClick = () => {
        if (answer.toLocaleLowerCase() === correctAnswer) {
            toast.success("Correct answer! Your score has been updated.");
            setUserLevel(6);
            setUserScore(10);
            const token = localStorage.getItem("SiteToken");
            axios
                .post(`${base}/api/update`, {
                    level,
                    score: 20,
                    token,
                })
                .then((response) => {
                    const data = response.data;
                    if (data.status === "200") {
                        toast("Updating successful");
                    } else {
                        toast.error("Updating Failed.");
                    }
                })
                .catch((error) => {
                    toast.error("Something went wrong");
                })
                .finally(() => {
                    router.reload();
                });
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
                Level 5: The Citadel of Valtor
            </p>

            <div className="content bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                <p className="text-2xl text-orange-700 font-bold mb-6 text-center">
                    In the citadel, you face your final challenge. You have to defeat Valtor in a battle of wits and
                    magic to retrieve the crystal and save the kingdom. Answer this riddle to get a sword and defeat
                    Valtor.
                </p>
                <p className="text-lg text-white font-bold mb-6 text-center w-72">
                    " I am always watching, but never seen, High up in the citadel, I am keen. I move with the wind, yet
                    I'm always still, I can whisper secrets, but never will. What am I? "
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
                        href="https://www.google.com/search?q=flag&tbm=isch&hl=en&chips=q:flag,g_1:india:30u9Avw5Wzo%3D,g_1:hd+wallpaper:N582dO0gr8s%3D&sa=X&ved=2ahUKEwjPv6qFz7_-AhUw3XMBHZVuCRkQ4lYoAnoECAEQLg&biw=1519&bih=722#imgrc=ZYl781rMLfVoQM"
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

export default LevelFive;
