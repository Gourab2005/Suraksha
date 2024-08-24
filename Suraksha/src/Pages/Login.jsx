import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import styles from "./Login.module.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const session = await account.get().catch(() => null);

      if (session) {
        await account.deleteSessions();
      }
      
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log(response); 
      window.location.href = '/loggedin'; 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
}

export default Login;