import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { databases, databaseId, collectionId } from '../appwrite/databases';
import { ID } from 'appwrite';

function Signup() {
    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const id = ID.unique();
            // Step 1: Create a new user account
            const response = await account.create(id, Email, password, username);
            // const Email = response.email;
            // const username = response.name;
            // Step 2: After successful account creation, create a document in your user profile collection
            await databases.createDocument(
                databaseId, 
                collectionId, 
                response.$id, 
                { Email, username, password }
            );

            // Step 3: Redirect to the log-in page
            window.location.href = '/Userlogin';
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
