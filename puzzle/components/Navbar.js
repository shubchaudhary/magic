import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [router.asPath]);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-black">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link href="/" className="flex items-center">
                        <img src="/logo-white.png" className=" w-16 mr-3" alt="Company Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            MAGIC LAND
                        </span>
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block md:w-auto focus:outline-none`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;