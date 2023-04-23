import React from "react";
import Link from "next/link";
import styles from "../styles/register.module.css";

const About = () => {
    return (
        <div className={styles.background + " min-h-screen flex flex-col justify-center items-center overflow-auto"}>
            <main className="content bg-gray-900 bg-opacity-70 border-2 border-black shadow-xl px-8  py-4 pb-8 rounded-2xl">
                <h1 className="text-4xl text-orange-700 font-bold mb-6 text-center">
                    Welcome to Magic Land,
                    <br />
                    the website where you can experience the magic of riddles!
                </h1>
                <p className="mb-6 text-white text-center">
                    Our website is dedicated to a single riddle, but with a twist.
                    <br />
                    This riddle comes in five different levels, each one more challenging than the last.
                    <br />
                    You can start with the easiest level and work your way up to the most difficult level.
                    <br />
                    Each level is designed to be a unique and exciting challenge for riddle enthusiasts of all ages.
                </p>
                <p className="mb-6 text-white text-center">
                    At Magic Land, we believe that solving riddles is not just a fun way to pass the time,
                    <br />
                    but also a great way to exercise your brain and improve your problem-solving skills.
                    <br />
                    Our riddle is carefully crafted to test your logic, creativity, and critical thinking abilities,
                    <br />
                    while also providing a sense of satisfaction and accomplishment when you finally solve it.
                </p>
                <p className="mb-6 text-white text-center">
                    We are committed to providing a safe and enjoyable experience for all our users.
                    <br />
                    We take user feedback seriously, and we're always looking for ways to improve our website
                    <br />
                    and make it more user-friendly. If you have any suggestions or comments,
                    <br />
                    please don't hesitate to contact us.
                </p>
                <h5 className="mb-6 text-white text-center">
                    We hope you enjoy the magic of our riddle and have a great time solving it!
                </h5>
                <div className="mailButton flex items-center justify-center">
                    <Link
                        href="mailto:shubchaudhary@outlook.in"
                        className="bg-orange-700 hover:bg-orange-800 text-white px-3 py-3 rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Mail Us for Any Feedback
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default About;
