import React from "react";
import styles from "../styles/register.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("SiteToken");
        if (isAuthenticated) {
            router.push("/play");
        }
    }, []);

    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "user found") {
                    toast("Login Successfully");
                    localStorage.setItem("SiteToken", data.token);
                    setSubmitted(true);
                    router.push("/play");
                }
                if (data.status === "not found") {
                    toast.error("Invalid credentials");
                }
            })
            .catch((err) => {
                toast.error("Something went wrong");
            });
    };

    return (
        <>
            <section className={styles.background + " min-h-screen flex  justify-center items-center overflow-auto"}>
                <div className="main">
                    <div className="content bg-gray-900 bg-opacity-70 border-2 border-black shadow-xl px-8 py-8 rounded-2xl">
                        <h1 className="text-2xl text-white font-bold text-center">Login to play</h1>
                        <form onSubmit={handleLogin} className="flex flex-col gap-4 pt-5">
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
                                Login
                            </button>
                        </form>
                        <h5 className="text-center text-white pt-3">
                            Don't have an account?{" "}
                            <Link className="text-orange-700" href="/register">
                                Register
                            </Link>
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
