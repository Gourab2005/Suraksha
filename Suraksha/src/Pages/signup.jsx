import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { databases, databaseId, collectionId, reportId } from '../appwrite/databases';
import { ID } from 'appwrite';
import AuthService from '../appwrite/auth';

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

            // Step 3: Redirect to the log-in page
            window.location.href = '/login';
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="number"
                    value={phone}
                    onChange={(e) => {setPhone(e.target.value);
                        console.log(e.target.value);
                    }}
                    placeholder="Mobile"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default Signup;