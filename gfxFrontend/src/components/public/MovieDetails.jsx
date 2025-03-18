import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
  BookButton,
  MovieHeader,
  MovieInfo,
  OptionsContainer,
  OptionButton,
} from "../../styles/MovieDetailsStyles";

// Combined movie data (Now Showing + Coming Soon)
const movies = [
  {
    id: 1,
    name: "Hostel 3",
    image: "../../../public/assets/movieImages/hostel3.png",
    description: "This is the description for Hostel 3.",
    price: 12.99,
    releaseDate: "February 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/314/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=9WTiSuyNq1Y",
  },
  {
    id: 2,
    name: "Outlaw Dafa",
    image: "../../../public/assets/movieImages/outlaw.png",
    description: "This is the description for Outlaw Dafa.",
    price: 10.99,
    releaseDate: "March 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/244/116/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=W0UdcuWttmQ&t=2s",
  },
  {
    id: 3,
    name: "Anjila",
    image: "../../../public/assets/movieImages/anjila.png",
    description: "This is the description for Anjila.",
    price: 12.99,
    releaseDate: "April 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/316/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=9KQpailBOLM&t=1s",
  },
  {
    id: 4,
    name: "Laaj Sharanam",
    image: "../../../public/assets/movieImages/laaj.png",
    description: "This is the description for Laaj Sharanam.",
    price: 10.99,
    releaseDate: "May 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/311/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=-QARtUsewxw",
  },
  {
    id: 5,
    name: "Mickey 17",
    image: "../../../public/assets/movieImages/mickey.png",
    description: "This is the description for Mickey 17.",
    price: 10.99,
    releaseDate: "June 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/307/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=tA1s65o_kYM",
  },
  {
    id: 6,
    name: "Chhaava",
    image: "../../../public/assets/movieImages/chhaava.png",
    description: "This is the description for Chhaava.",
    price: 10.99,
    releaseDate: "July 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/303/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=77vRyWNqZjM",
  },
  {
    id: 7,
    name: "Rajagunj",
    image: "../../../public/assets/movieImages/rajagunj.png",
    description: "This is the description for Rajagunj.",
    price: 10.99,
    releaseDate: "August 2025",
    url: "https://www.qfxcinemas.com/now-showing-booking/315/1/", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=5yPNAGuMK1Y&t=4s",
  },
  {
    id: 8,
    name: "Snow White",
    image: "../../../public/assets/movieImages/snowwhite.png",
    description: "This is the description for Coming Soon Movie 1.",
    price: 12.99,
    releaseDate: "September 2025",
    url: "https://www.qfxcinemas.com/movie-details/377/1/3", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=iV46TJKL8cU",
  },
  {
    id: 9,
    name: "Draupadi",
    image: "../../../public/assets/movieImages/draupadi.png",
    description: "This is the description for Coming Soon Movie 2.",
    price: 10.99,
    releaseDate: "October 2025",
    url: "https://www.qfxcinemas.com/movie-details/318/1/3", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=UFzYRvh5DJ8",
  },
  {
    id: 10,
    name: "Sikandar",
    image: "../../../public/assets/movieImages/sikandar.png",
    description: "This is the description for Coming Soon Movie 3.",
    price: 11.99,
    releaseDate: "November 2025",
    url: "https://www.qfxcinemas.com/movie-details/306/1/3", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=RouIzAuPGGU",
  },
  {
    id: 11,
    name: "Dorii",
    image: "../../../public/assets/movieImages/dori.png",
    description: "This is the description for Coming Soon Movie 3.",
    price: 11.99,
    releaseDate: "November 2025",
    url: "https://www.qfxcinemas.com/movie-details/378/1/3", // Fcube/QFX URL
    trailerUrl: "https://www.youtube.com/watch?v=H8R-Mh8sB-o",
  },
];

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Show a loading message if the movie is not found
  }

  const handleBookTickets = () => {
    navigate("/booking", { state: { movie } }); // Navigate to booking page with movie details
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

        {/* External Links */}
        <OptionsContainer>
          <a href={movie.url} target="_blank" rel="noopener noreferrer">
            <OptionButton>View on Fcube/QFX</OptionButton>
          </a>
          <a href="https://www.bookmyshow.com" target="_blank" rel="noopener noreferrer">
            <OptionButton>Book on BookMyShow</OptionButton>
          </a>
          <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
            <OptionButton>Watch Trailer</OptionButton>
          </a>
        </OptionsContainer>

        {/* BOOK Tickets Button */}
        <BookButton onClick={handleBookTickets}>BOOK Tickets</BookButton>
      </MovieContainer>
    </MainContainer>
  );
}