import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { base } from "../handler/base";

const LevelTwo = () => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [score, setUserScore] = useState(4);
    const [level, setUserLevel] = useState(3);
    const correctAnswer = "shadow";

    const handleSubmitClick = () => {
        if (answer.toLocaleLowerCase() === correctAnswer) {
            toast.success("Correct answer! Your level has been updated.");
            setUserLevel(3);
            setUserScore(4);
            const token = localStorage.getItem("SiteToken");
            axios
                .post(`${base}/api/update`, {
                    level,
                    score,
                    token,
                })
                .then((response) => {
                    const { data } = response;
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
                Level 2: The Cavern of Shadows
            </p>

            <div className="content bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                <p className="text-2xl text-orange-700 font-bold mb-6 text-center">
                    In the cavern, you have to navigate through a maze of shadows, using only a lantern to light their
                    way. To get your lantern answer this riddle.
                </p>
                <p className="text-lg text-white font-bold mb-6 text-center w-72">
                    " I'm always by your side, Yet never in your way. You see me in the light, But I hide in the shade.
                    What am I? "
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
                        href="https://www.google.com/search?q=shadow&tbm=isch&hl=en&chips=q:shadow,g_1:light:5k-LqZuu4qc%3D,g_1:window:Xl-EAI8seNg%3D&sa=X&ved=2ahUKEwjA9azPzb_-AhXCkOYKHaauB8MQ4lYoBHoECAEQMg&biw=1519&bih=722#imgrc=iGtTmV_zUgDXAM"
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

export default LevelTwo;
