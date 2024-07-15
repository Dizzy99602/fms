// src/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// User APIs
export const registerUser = (user: { username: string; password: string; role: string }) =>
  axios.post(`${API_URL}/users/register`, user);

export const loginUser = (credentials: { username: string; password: string }) =>
  axios.post(`${API_URL}/users/login`, credentials);

export const getAllUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (id: number) => axios.get(`${API_URL}/users/${id}`);

// Flight APIs
export const searchFlights = (params: { origin?: string; destination?: string; departureDate?: string }) =>
  axios.get(`${API_URL}/flights/search`, { params });

export const getFlightById = (id: number) => axios.get(`${API_URL}/flights/${id}`);
export const getAllFlights = () => axios.get(`${API_URL}/flights`);

// Booking APIs
export const createBooking = (booking: { flightId: number; userId: number; passengerName: string; seatNumber: string }) =>
  axios.post(`${API_URL}/bookings`, booking);

export const getBookingById = (id: number) => axios.get(`${API_URL}/bookings/${id}`);
export const getAllBookings = () => axios.get(`${API_URL}/bookings`);

// Flight APIs
export const createFlight = (flight: {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  status: string;
  price: number;
  availableSeats: number;
}) => axios.post(`${API_URL}/flights`, flight);
