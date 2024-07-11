import React, { useState } from 'react';
import axios from 'axios';
import styles from './Registration.module.css';

const Registration: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        axios.post('/api/users/register', { username, password, role: 'USER' })
            .then(response => {
                console.log('Registration successful');
                // Handle registration success
            })
            .catch(error => {
                console.error('Error registering', error);
            });
    };

    return (
        <div className={styles.registrationContainer}>
            <h2 className={styles.title}>Register</h2>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <input
                    className={styles.input}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className={styles.button} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
