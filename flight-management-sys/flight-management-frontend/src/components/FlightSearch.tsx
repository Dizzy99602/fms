import React, { useState } from 'react';
import axios from 'axios';
import styles from './FlightSearch.module.css';

const FlightSearch: React.FC = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSearch = () => {
        axios.get('/api/flights/search', { params: { origin, destination, departureDate } })
            .then(response => {
                console.log('Search results:', response.data);
                // Handle flight search results
            })
            .catch(error => {
                console.error('Error searching flights', error);
            });
    };

    return (
        <div className={styles.flightSearchContainer}>
            <h2 className={styles.title}>Search Flights</h2>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <input
                    className={styles.input}
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Origin"
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination"
                    required
                />
                <input
                    className={styles.input}
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                />
                <button className={styles.button} type="submit">Search Flights</button>
            </form>
        </div>
    );
};

export default FlightSearch;
