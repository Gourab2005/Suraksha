import React, { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import DatabaseService from "../appwrite/databases1";
import { databaseId, reportId } from "../appwrite/databases";
import { ID } from "appwrite";
import "./Loggedin.css";

function LoggedInPage() {
  const [problems, setProblems] = useState([]);
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [myProblems, setMyProblems] = useState([]);

  useEffect(() => {
    const fetchUserAndProblems = async () => {
      try {
        // Fetch the user
        const userResponse = await account.get();
        setUser(userResponse);

        // Fetch problems after getting the user
        const problemsResponse = await DatabaseService.listDocuments(
          databaseId,
          reportId
        );
        setProblems(problemsResponse.documents);

        // Filter the user's own problems
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

    // Set up an interval to refresh the data every 5 seconds
    const intervalId = setInterval(fetchUserAndProblems, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setError(null); // Clear any previous errors
            resolve(position); // Resolve the promise with the position data
          },
          (err) => {
            setError(err.message);
            reject(err); // Reject the promise if there's an error
          }
        );
      } else {
        const errorMessage = "Geolocation is not supported by this browser.";
        setError(errorMessage);
        reject(new Error(errorMessage));
      }
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const position = await getLocation(); // Wait for the location to be fetched
      const email = user.email;
      const username = user.name;
      const phone = 8116693879; // Example phone number, consider making this dynamic
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

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
      <button onClick={handleClick}>GET HELP</button>
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
                <td>{problem.username}</td>
                <td>{problem.Email}</td>
                <td>{problem.phone}</td>
                <td>{problem.Location}</td>
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
                <td>{myProblem.Location}</td>
                <td>{myProblem.Type}</td>
                <td>{myProblem.Problem}</td>
                <td>{myProblem.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoggedInPage;
