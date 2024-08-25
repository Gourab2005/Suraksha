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
    <div>
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
      
      <button className="circle-container" onClick={handleClick}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="help">HELP</div>
      </button>
      
      {error && <p>Error: {error}</p>}
      <div>
        <h2>Emergency Panel</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>SI. No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Location</th>
              <th>Type of Problem</th>
              <th>Problem Description</th>
              <th>Action Status</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={problem.$id}>
                <td>{index + 1}</td>
                <td>Anonymous</td>
                <td>XXXXXXXX</td>
                <td>{problem.phone}</td>
                <td>
                  <a href={problem.Location} target="_blank">
                    <button>See Location</button>
                  </a>
                </td>
                <td>{problem.Type}</td>
                <td>{problem.Problem}</td>
                <td>{problem.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>My Emergencies</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>SI. No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Location</th>
              <th>Type of Problem</th>
              <th>Problem Description</th>
              <th>Action Status</th>
            </tr>
          </thead>
          <tbody>
            {myProblems.map((myProblem, index) => (
              <tr key={myProblem.$id}>
                <td>{index + 1}</td>
                <td>{myProblem.username}</td>
                <td>{myProblem.Email}</td>
                <td>{myProblem.phone}</td>
                <td>
                  <a href={myProblem.Location}>
                    <button>See Your Location</button>
                  </a>
                </td>
                <td>{myProblem.Type}</td>
                <td>{myProblem.Problem}</td>
                <td>{myProblem.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <h2>Unsafe Zones</h2>

      {recentLoc && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MapComponent mapLink={recentLoc} />
        </div>
      )}
    </div>
  );
}

export default Login;