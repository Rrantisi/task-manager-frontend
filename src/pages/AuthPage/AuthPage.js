import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [isSignedUp, setIsSignedUp] = useState(true);

  const toggleForm = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Welcome to Task Manager</h1>
        </div>
        <div className="col-md-6">
          {isSignedUp ? (
            <SignUpForm setUser={setUser} />
          ) : (
            <LoginForm setUser={setUser} />
          )}
          <div className="text-center mt-3">
            <button className="btn btn-outline-warning" onClick={toggleForm}>
              Switch to {isSignedUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
