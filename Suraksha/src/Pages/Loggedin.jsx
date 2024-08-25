import React, { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import DatabaseService from "../appwrite/databases1";
import { databaseId, reportId } from "../appwrite/databases";
import { ID } from "appwrite";
import MapComponent from "../Components/MapComponent";
import './Loggedin.css';

function LoggedInPage() {
  const [problems, setProblems] = useState([]);
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [myProblems, setMyProblems] = useState([]);
  const [count, setCount] = useState(0);
  const [recentLoc, setRecentLoc] = useState(null);

  useEffect(() => {
    const fetchUserAndProblems = async () => {
      try {
        const userResponse = await account.get();
        setUser(userResponse);

        const problemsResponse = await DatabaseService.listDocuments(
          databaseId,
          reportId
        );
        setProblems(problemsResponse.documents);

        if (count < problemsResponse.documents.length) {
          const location =
            problemsResponse.documents[problemsResponse.documents.length - 1]
              .Location;
          setRecentLoc(location);
          console.log(location);
          setCount(problemsResponse.documents.length);
        }

        const userProblems = problemsResponse.documents.filter(
          (problem) =>
            problem.username === userResponse.name &&
            problem.Email === userResponse.email
        );
        setMyProblems(userProblems);
      } catch (err) {
        console.error("Error fetching user or problems:", err);
      }
    };

    fetchUserAndProblems();

    const intervalId = setInterval(fetchUserAndProblems, 5000);

    return () => clearInterval(intervalId);
  }, [count]);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const position = await getLocation();
      const email = user.email;
      const username = user.name;
      const phone = 8116693879;
      const loc = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
      const problem = "EMERGENCY";

      await DatabaseService.createDocument(databaseId, reportId, ID.unique(), {
        username: username,
        Email: email,
        phone: phone,
        Problem: problem,
        Location: loc,
      });

      console.log("Document created successfully");
    } catch (err) {
      console.error("Error creating document:", err);
    }
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setError(null);
            resolve(position);
          },
          (err) => {
            setError(err.message);
            reject(err);
          }
        );
      } else {
        const errorMessage = "Geolocation is not supported by this browser.";
        setError(errorMessage);
        reject(new Error(errorMessage));
      }
    });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

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

export default LoggedInPage;
