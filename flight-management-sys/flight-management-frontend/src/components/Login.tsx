import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('/api/auth/login', { username, password })
            .then(response => {
                console.log('Login successful');
                // Handle login success
            })
            .catch(error => {
                console.error('Error logging in', error);
            });
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
