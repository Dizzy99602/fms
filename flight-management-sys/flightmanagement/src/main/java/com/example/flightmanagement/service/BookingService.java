package com.example.flightmanagement.service;

import com.example.flightmanagement.model.Booking;
import com.example.flightmanagement.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking bookFlight(Booking booking) {
        return bookingRepository.save(booking);
    }
}
