package com.example.flightmanagement.controller;

import com.example.flightmanagement.model.Booking;
import com.example.flightmanagement.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping("/book")
    public Booking bookFlight(@RequestBody Booking booking) {
        return bookingService.bookFlight(booking);
    }
}
