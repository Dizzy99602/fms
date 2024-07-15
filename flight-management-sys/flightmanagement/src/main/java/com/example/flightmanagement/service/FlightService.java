package com.example.flightmanagement.service;

import com.example.flightmanagement.model.Flight;
import com.example.flightmanagement.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public Flight createFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public List<Flight> searchFlights(String origin, String destination, String departureDate) {
        if (origin != null && destination != null && departureDate != null) {
            LocalDate date = LocalDate.parse(departureDate);
            return flightRepository.findByOriginAndDestinationAndDepartureDate(origin, destination, date);
        } else if (origin != null && destination != null) {
            return flightRepository.findByOriginAndDestination(origin, destination);
        } else if (destination != null) {
            return flightRepository.findByDestination(destination);
        } else {
            return flightRepository.findAll();
        }
    }

    public Flight getFlightById(Long id) {
        return flightRepository.findById(id).orElse(null);
    }
}
