import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

const LevelThree = () => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [score, setUserScore] = useState(6);
    const [level, setUserLevel] = useState(4);
    const correctAnswer = "illusion";

    const handleSubmitClick = () => {
        if (answer.toLocaleLowerCase() === correctAnswer) {
            toast.success("Correct answer! Your level has been updated.");
            setUserLevel(4);
            setUserScore(6);
            const token = localStorage.getItem("SiteToken");
            fetch("http://localhost:8080/api/update", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    level,
                    score,
                    token,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "200") {
                        toast("Updating successful");
                    } else {
                        toast.error("Updating Failed.");
                    }
                })
                .catch((err) => {
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
                Level 3: The Tower of Illusion
            </p>

            <div className="content bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                <p className="text-2xl text-orange-700 font-bold mb-6 text-center">
                    In the tower, you have to solve a riddle to reach the top. At the top, you will find the way to the
                    next level.
                </p>
                <p className="text-lg text-white font-bold mb-6 text-center w-72">
                    " I am a type of trick, that you might see in a show. You'll be amazed and fooled, when I appear and
                    then go. What am I? "
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
                        href="https://www.google.com/search?q=illusion&sxsrf=APwXEdeTa3dV9VXle0Kje5DbZh0rL_Z1rw:1682236040717&source=lnms&tbm=isch&sa=X&ved=2ahUKEwickIrNwb_-AhVOxjgGHZ4gDskQ_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=4Q--wamlE6XkzM"
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

export default LevelThree;
