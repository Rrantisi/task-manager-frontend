import React, { useState } from "react";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
// import "./AuthPage.css";

export default function AuthPage({ setUser }) {
    const [isSignedUp, setIsSignedUp] = useState(true);
    const toggleForm = () => {
        setIsSignedUp(!isSignedUp);
    }

    return (
        <main>
            <h1>Welcome to Task Manager</h1>
            {isSignedUp? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )
        }
        <div>
            <button className="toggle-button" onClick={toggleForm}>
                Switch to {isSignedUp ? "Sign In" : "Sign Up"}
            </button>
        </div>
        </main>
    );
}