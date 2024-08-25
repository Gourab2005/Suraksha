import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { databases, databaseId, collectionId, reportId } from '../appwrite/databases';
import { ID } from 'appwrite';
import AuthService from '../appwrite/auth';
import styles from "./Signup.module.css"; // Correctly import CSS module

function Signup() {
    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthService.signup(Email, password, username);
            console.log(response);
            await databases.createDocument(
                databaseId,
                collectionId, 
                response.$id, 
                { Email, username, password, phone }
            );

            window.location.href = '/login';
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Signup</h2>
            <form onSubmit={handleSignup} className={styles.form}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="number"
                    value={phone}
                    onChange={(e) => {setPhone(e.target.value);
                        console.log(e.target.value);
                    }}
                    placeholder="Mobile"
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
                <button type="submit" className={styles.button}>Signup</button>
            </form>
            {error && <p className={styles.error}>Error: {error}</p>}
        </div>
    );
}

export default Signup;
