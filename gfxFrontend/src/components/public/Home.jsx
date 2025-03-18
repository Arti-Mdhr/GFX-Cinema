import React from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  NavFrame,
  NavTitle,
  NavItemsFrame,
  NavItems,
  ContentFrame,
  TrendingFrame,
  TrendingIndicate,
  TrendingContent,
  TrendingItem,
  TrendingImage,
  TrendingName,
} from "../../styles/HomeStyles";

// Import movie images
import cap from "../../../public/assets/movieImages/hostel3.png";
import cha from "../../../public/assets/movieImages/outlaw.png";
import duk from "../../../public/assets/movieImages/laaj.png";
import tan from "../../../public/assets/movieImages/chhaava.png";
import cra from "../../../public/assets/movieImages/anjila.png";
import res from "../../../public/assets/movieImages/mickey.png";
import raj from "../../../public/assets/movieImages/rajagunj.png";

// Import Coming Soon movie images
import soon1 from "../../../public/assets/movieImages/snowwhite.png";
import soon2 from "../../../public/assets/movieImages/draupadi.png";
import soon3 from "../../../public/assets/movieImages/sikandar.png";
import soon4 from "../../../public/assets/movieImages/dori.png";

export default function Home() {
  // Movies currently showing
  const nowShowing = [
    { id: 1, name: "Hostel 3", img: cap },
    { id: 2, name: "Outlaw Dafa", img: cha },
    { id: 3, name: "Anjila", img: cra },
    { id: 4, name: "Laaj Sharanam", img: duk },
    { id: 5, name: "Mickey 17", img: res },
    { id: 6, name: "Chhaava", img: tan },
    { id: 7, name: "Rajagunj", img: raj },
  ];

  // Movies coming soon
  const comingSoon = [
    {
      id: 8,
      name: "Snow White",
      img: soon1,
      description: "This is the description for Coming Soon Movie 1.",
      price: 12.99,
      releaseDate: "August 2025",
      trailerUrl: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 9,
      name: "Draupadi",
      img: soon2,
      description: "This is the description for Coming Soon Movie 2.",
      price: 10.99,
      releaseDate: "September 2025",
      trailerUrl: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 10,
      name: "Sikandar",
      img: soon3,
      description: "This is the description for Coming Soon Movie 3.",
      price: 11.99,
      releaseDate: "October 2025",
      trailerUrl: "https://www.youtube.com/watch?v=example3",
    },
    {
      id: 11,
      name: "Dorii",
      img: soon4,
      description: "This is the description for Coming Soon Movie 3.",
      price: 11.99,
      releaseDate: "October 2025",
      trailerUrl: "https://www.youtube.com/watch?v=example4",
    },
  ];

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

      {/* Main Content */}
      <ContentFrame>
        {/* NOW SHOWING Section */}
        <TrendingFrame>
          <TrendingIndicate>NOW SHOWING</TrendingIndicate>
          <TrendingContent>
            {nowShowing.map((item) => (
              <Link to={`/movie/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                <TrendingItem>
                  <TrendingImage src={item.img} alt={item.name} />
                  <TrendingName>{item.name}</TrendingName>
                </TrendingItem>
              </Link>
            ))}
          </TrendingContent>
        </TrendingFrame>

        {/* COMING SOON Section */}
        <TrendingFrame>
          <TrendingIndicate>COMING SOON</TrendingIndicate>
          <TrendingContent>
            {comingSoon.map((item) => (
              <Link to={`/movie/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                <TrendingItem>
                  <TrendingImage src={item.img} alt={item.name} />
                  <TrendingName>{item.name}</TrendingName>
                </TrendingItem>
              </Link>
            ))}
          </TrendingContent>
        </TrendingFrame>
      </ContentFrame>
    </MainContainer>
  );
}