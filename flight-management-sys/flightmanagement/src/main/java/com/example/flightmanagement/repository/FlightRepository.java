package com.example.flightmanagement.repository;

import com.example.flightmanagement.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {

    List<Flight> findByOriginAndDestinationAndDepartureDate(String origin, String destination, LocalDate departureDate);

    List<Flight> findByOriginAndDestination(String origin, String destination);

    List<Flight> findByDestination(String destination);

    @Query("SELECT f FROM Flight f WHERE (:origin IS NULL OR f.origin = :origin) AND (:destination IS NULL OR f.destination = :destination) AND (:departureDate IS NULL OR f.departureDate = :departureDate)")
    List<Flight> searchFlights(
            @Param("origin") String origin,
            @Param("destination") String destination,
            @Param("departureDate") LocalDate departureDate
    );
}
