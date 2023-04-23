import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

const LevelFour = () => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [score, setUserScore] = useState(8);
    const [level, setUserLevel] = useState(5);
    const correctAnswer = "time";

    const handleSubmitClick = () => {
        if (answer.toLocaleLowerCase() === correctAnswer) {
            toast.success("Correct answer! Your level has been updated.");
            setUserLevel(5);
            setUserScore(8);
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
                Level 4: The Labyrinth of Time
            </p>

            <div className="content bg-gray-900 flex flex-col items-center mx-80 h-auto bg-opacity-80 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                <p className="text-2xl text-orange-700 font-bold mb-6 text-center">
                    In the labyrinth, adventurers had to race against the clock to find a hidden portal that would
                    transport them to the final level. Solve this riddle to find that portal.
                </p>
                <p className="text-lg text-white font-bold mb-6 text-center w-72">
                    " I am always moving, but I have no feet, hands, or wings. I'm invisible and you can't see me, but I
                    never stop. What am I? "
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
                        href="https://www.google.com/search?q=time&sxsrf=APwXEddlzUIJef_i4uknNGRjQyguMkxATA:1682239449146&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiInqymzr_-AhXnyqACHfN_Ce4Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=1MVh1I4dcXNLfM"
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

export default LevelFour;
