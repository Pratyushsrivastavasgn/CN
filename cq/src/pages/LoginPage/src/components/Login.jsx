import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage("");

    // Check if username exists
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("password")
      .eq("username", username)
      .single();

    if (userError) {
      setError(true);
      setMessage("Error: " + userError.message);
      return;
    }

    if (!userData) {
      setError(true);
      setMessage("Username not found");
      return;
    }

    if (userData.password !== password) {
      setError(true);
      setMessage("Wrong Password. Try Again!");
      return;
    }

    setError(false);
    // Placeholder message instead of actual redirect
    setMessage(`Welcome, ${username}! Redirecting to Water Jug Challenge...`);
  };

  return (
    <div className="round2-container">
      <img src="/dg.png" alt="Round 2" className="round2-image" />

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        {message && (
          <p className={error ? "error-message" : "success-message"}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
