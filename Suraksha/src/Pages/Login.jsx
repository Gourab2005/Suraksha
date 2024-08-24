import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    //   await account.deleteSessions();
    //   console.log("Previous session deleted");
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log(response); // You can handle the response as needed
      window.location.href = '/loggedin'; // Redirect to logged-in page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Login;