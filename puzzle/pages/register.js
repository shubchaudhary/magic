import React from "react";
import styles from "../styles/register.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import base from "../handler/base";

const Register = () => {
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("SiteToken");
        if (isAuthenticated) {
            router.push("/play");
        }
    }, []);

    const router = useRouter();
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post(
                `${base}/api/register`,
                {
                    username,
                    email,
                    password,
                },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            )
            .then((response) => {
                const data = response.data;
                if (data.message === "user created") {
                    toast("Registered Successfully");
                    setSubmitted(true);
                    router.push("/login");
                } else {
                    toast.error("Username/email already exists.");
                }
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    };
    return (
        <>
            <section className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}>
                <div className="main">
                    <div className="content bg-gray-900 bg-opacity-70 border-2 border-black shadow-xl px-10 py-8 rounded-2xl">
                        <h1 className="text-2xl text-white font-bold text-center">Register to play!</h1>
                        <form onSubmit={handleRegister} className="flex flex-col gap-4 pt-5">
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-gray-100 text-gray-800 shadow-md border-2 focus:outline-none rounded-xl px-3 py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                type="text"
                                placeholder="Username"
                                required
                            />
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-100 text-gray-800 shadow-md border-2 focus:outline-none rounded-xl px-3 py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-100 text-gray-800 shadow-md border-2 focus:outline-none rounded-xl px-3 py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <button
                                className="bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                        <h5 className="text-center text-white pt-3">
                            Have an Account?{" "}
                            <Link className="text-orange-700" href="/login">
                                Login
                            </Link>
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
