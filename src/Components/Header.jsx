import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { googleProvider, auth } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Header({isAuth, setIsAuth}) {
    

    // Check if the user is authenticated when the component mounts
    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem("auth"));
        if (storedAuth) {
            setIsAuth(true);
        }
    }, []);

    // Sign in with Google
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setIsAuth(true);
            // Save authentication status in localStorage
            localStorage.setItem("auth", JSON.stringify(true));
        } catch (err) {
            console.error(err);
        }
    };

    // Log out
    const logOut = async () => {
        try {
            await signOut(auth);
            setIsAuth(false);
            // Remove authentication data from localStorage
            localStorage.removeItem("auth");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
                <span>WriteNote</span>
            </Link>
            <nav className="nav">
                <NavLink to="/" className="link" end>Home</NavLink>
                {isAuth ? (
                    <>
                        <NavLink to="/create" className="link">Create</NavLink>
                        <button className="auth" onClick={logOut}>
                            <i className="bi bi-box-arrow-right"></i> Logout
                        </button>
                    </>
                ) : (
                    <button className="auth" onClick={signInWithGoogle}>
                        <i className="bi bi-google"></i> Login
                    </button>
                )}
            </nav>
        </header>
    );
}
