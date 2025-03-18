import styled from "styled-components";

// Main container for the page
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #0a0a0a; /* Darker background for a cinematic feel */
  color: #f5f5f5; /* Light text color */
  font-family: "Poppins", sans-serif; /* Modern font */
`;

// Navigation bar styles
export const NavFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
  padding: 0 40px;
  box-sizing: border-box;
  backdrop-filter: blur(10px); /* Blur effect for a modern look */
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// Navigation title (GFX CINEMA)
export const NavTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #ffcc00; /* Yellow color for the title */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #e6b800; /* Darker yellow on hover */
  }
`;

// Container for navigation items (Home, Coming Soon, Logout)
export const NavItemsFrame = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

// Individual navigation items
export const NavItems = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #f5f5f5; /* Light text color */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffcc00; /* Yellow on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

// Container for movie details
export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 40px 40px; /* Adjusted padding to account for fixed navbar */
  background-color: #0a0a0a; /* Dark background */
  color: #f5f5f5; /* Light text color */
  min-height: 100vh;
`;

// Header section for movie details (image and title)
export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

// Movie image
export const MovieImage = styled.img`
  width: 250px;
  height: 375px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Stronger shadow for depth */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

// Container for movie info (title, release date)
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Movie title
export const MovieTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: #ffcc00; /* Yellow color for the title */
`;

// Movie description
export const MovieDescription = styled.p`
  font-size: 18px;
  text-align: justify;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.8;
  color: #d1d1d1; /* Slightly lighter text for better readability */
`;

// Movie price
export const MoviePrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #ffcc00; /* Yellow color for the price */
`;

// BOOK Tickets button
export const BookButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 600;
  background-color: #ffcc00; /* Yellow background */
  color: #000; /* Black text */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Subtle shadow */

  &:hover {
    background-color: #e6b800; /* Darker yellow on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }
`;

// Container for external links (View on Fcube, Book on BookMyShow, Watch Trailer)
export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

// Styled buttons for external links
export const OptionButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  background-color: #ffcc00; /* Yellow background */
  color: #000; /* Black text */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Subtle shadow */

  &:hover {
    background-color: #e6b800; /* Darker yellow on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }
`;
