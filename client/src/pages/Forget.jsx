import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

export default function Forget() {
    const { user, sendResetEmail } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");

    useEffect(() => {
        const emailFromQuery = searchParams.get("email");
        if (emailFromQuery) {
            setEmail(emailFromQuery);
        }
    }, [searchParams]);

    if (user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendResetEmail(email);
            toast.success("Password reset email sent successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setEmail("");
            window.location.href = "https://mail.google.com";
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.error(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>EquiSports | Forget Password</title>
                <meta name="Forget Password" content="EquiSports | Forget Password" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full border-2 max-w-md bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                        Forgot Password
                    </h2>
                    <p className="text-gray-600 text-center mt-2 mb-6">
                        Enter your email to receive a password reset link.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
                        >
                            Send Reset Link
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <Link
                            href="/login"
                            className="text-indigo-500 hover:underline text-sm"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
