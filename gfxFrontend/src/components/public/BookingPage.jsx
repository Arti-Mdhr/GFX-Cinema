import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MainContainer,
  NavFrame,
  NavTitle,
  NavItemsFrame,
  NavItems,
  MovieContainer,
  MovieImage,
  MovieTitle,
  MovieDescription,
  MoviePrice,
  OptionsContainer,
  OptionButton,
} from "../../styles/MovieDetailsStyles";
import styled from "styled-components";

// Seat selection styles
const SeatLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const SeatRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Seat = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.selected ? "#ffcc00" : "#444")};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "#000" : "#fff")};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#e6b800" : "#666")};
  }
`;

const ConfirmButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  background-color: #ffcc00;
  color: #000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6b800;
    transform: translateY(-2px);
  }
`;

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state; // Get movie details from navigation state

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat)); // Deselect seat
    } else {
      setSelectedSeats([...selectedSeats, seat]); // Select seat
    }
  };

  // Function to confirm booking
  const handleConfirmBooking = () => {
    if (selectedSeats.length > 0) {
      alert(`You have booked seats: ${selectedSeats.join(", ")}`);
      navigate("/home"); // Redirect to home after booking
    } else {
      alert("Please select at least one seat.");
    }
  };

  return (
    <MainContainer>
      {/* Navigation Bar */}
      <NavFrame>
        <NavTitle>GFX CINEMA</NavTitle>
        <NavItemsFrame>
          <Link to="/home">
            <NavItems>Home</NavItems>
          </Link>
          <Link to="/comingSoon">
            <NavItems>Coming Soon</NavItems>
          </Link>
          <NavItems>Logout</NavItems>
        </NavItemsFrame>
      </NavFrame>

      {/* Movie Details */}
      <MovieContainer>
        <MovieHeader>
          <MovieImage src={movie.image} alt={movie.name} />
          <MovieInfo>
            <MovieTitle>{movie.name}</MovieTitle>
            <p>Release Date: {movie.releaseDate}</p>
          </MovieInfo>
        </MovieHeader>

        <MovieDescription>{movie.description}</MovieDescription>
        <MoviePrice>Price: ${movie.price}</MoviePrice>

        {/* Seat Selection */}
        <SeatLayoutContainer>
          <h2>Select Seats</h2>
          {[...Array(5)].map((_, row) => (
            <SeatRow key={row}>
              {[...Array(10)].map((_, seat) => {
                const seatNumber = `${row + 1}-${seat + 1}`;
                return (
                  <Seat
                    key={seatNumber}
                    selected={selectedSeats.includes(seatNumber)}
                    onClick={() => handleSeatClick(seatNumber)}
                  >
                    {seat + 1}
                  </Seat>
                );
              })}
            </SeatRow>
          ))}
        </SeatLayoutContainer>

        {/* Confirm Booking Button */}
        <ConfirmButton onClick={handleConfirmBooking}>
          Confirm Booking
        </ConfirmButton>
      </MovieContainer>
    </MainContainer>
  );
}