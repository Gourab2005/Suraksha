import React, { useState, useEffect } from "react";
import DatabaseService from "../appwrite/databases1";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [problems, setProblems] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [audio, setAudio] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const audioObj = new Audio();
    audioObj.src = "../res/livechat-129007.mp3";
    const sourceOgg = document.createElement("source");
    sourceOgg.src = "../res/livechat-129007.ogg";
    sourceOgg.type = "audio/ogg";

    audioObj.appendChild(sourceOgg);
    setAudio(audioObj);
    console.log(audioObj);
    const fetchProblems = async () => {
      try {
        const response = await DatabaseService.listDocuments(
          "66c3957e003ad6cb5a44",
          "66c49e670031a6eb40b9"
        );
        setProblems(response.documents);
        console.log(response.total);
        console.log(count);
        if (notificationsEnabled && response.total > count) {
          audioObj
            .play()
            .then(() => {
              console.log("Audio played");
            })
            .catch((err) => {
              console.log("Audio play failed:", err);
            });
          setCount(response.total);
        }
      } catch (err) {
        console.log("Error fetching problems:", err);
      }
    };

    fetchProblems();

    const intervalId = setInterval(fetchProblems, 5000);

    return () => clearInterval(intervalId);
  }, [notificationsEnabled, count]);

  const handleTakeAction = async (id) => {
    try {
      await DatabaseService.updateDocument(
        "66c3957e003ad6cb5a44",
        "66c49e670031a6eb40b9",
        id,
        { Status: "taken" }
      );

      setProblems(
        problems.map((problem) =>
          problem.$id === id ? { ...problem, Status: "taken" } : problem
        )
      );
    } catch (err) {
      console.error("Error updating action status:", err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {!notificationsEnabled && (
        <button onClick={() => setNotificationsEnabled(true)}>
          Enable Notifications
        </button>
      )}
      <div className="table-con">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={problem.$id}>
                <td>{index + 1}</td>
                <td>{problem.username}</td>
                <td>{problem.Email}</td>
                <td>{problem.phone}</td>
                <td>
                  <a href={problem.Location}>
                    <button>See Location</button>
                  </a>
                </td>
                <td>{problem.Type}</td>
                <td>{problem.Problem}</td>
                <td>{problem.Status}</td>
                <td>
                  {problem.Status !== "taken" && (
                    <button onClick={() => handleTakeAction(problem.$id)}>
                      Take Action
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
