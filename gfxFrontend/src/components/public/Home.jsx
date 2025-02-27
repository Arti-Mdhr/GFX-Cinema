import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  HoverBox,
  HoverOption
} from "../../styles/HomeStyles";

import cap from '../../../public/assets/movieImages/captainAmerica.png'
import cha from '../../../public/assets/movieImages/chhaava.png'
import duk from '../../../public/assets/movieImages/dukhiAtma.png'
import tan from '../../../public/assets/movieImages/tandav.png'
import cra from '../../../public/assets/movieImages/Crazy.png'
import res from '../../../public/assets/movieImages/reshamPiriri.png'

export default function Home() {
  const nowShowing = [
    { name: "Captain America", img: cap, url: "https://www.fcubecinemas.com/movie/captain-america" },
    { name: "Chhaava", img: cha, url: "https://www.fcubecinemas.com/movie/chhaava" },
    { name: "Crazy", img: cra, url: "https://www.fcubecinemas.com/movie/crazy" },
    { name: "Dukhi Aatma", img: duk, url: "https://www.fcubecinemas.com/movie/dukhi-aatma" },
    { name: "Pheri Resham Phiriri", img: res, url: "https://www.fcubecinemas.com/show/1554/Feri-Resham-Filili-(U)/" },
    { name: "Tandav", img: tan, url: "https://www.fcubecinemas.com/movie/tandav" }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <MainContainer>
      <NavFrame>
        <NavTitle>GFX CINEMA</NavTitle>
        <NavItemsFrame>
          <Link to='/home'><NavItems>Home</NavItems></Link>
          <Link to='/comingSoon'><NavItems>Coming Soon</NavItems></Link>
          <NavItems>Logout</NavItems>
        </NavItemsFrame>
      </NavFrame>

      <ContentFrame>
        <TrendingFrame>
          <TrendingIndicate>NOW SHOWING</TrendingIndicate>
          <TrendingContent>
            {nowShowing.map((item, index) => (
              <TrendingItem 
                key={index} 
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <TrendingImage src={item.img} alt={item.name} />
                <TrendingName>{item.name}</TrendingName>
                
                {/* Hover box with external links */}
                {hoverIndex === index && (
                  <HoverBox>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <HoverOption>View on Fcube</HoverOption>
                    </a>
                    <a href="https://www.bookmyshow.com" target="_blank" rel="noopener noreferrer">
                      <HoverOption>Book on BookMyShow</HoverOption>
                    </a>
                    <a href="https://youtu.be/Qy_wQsBwW5A?si=dIGHOoXTjWPBJ6Eu" target="_blank" rel="noopener noreferrer">
                      <HoverOption>Watch Trailer</HoverOption>
                    </a>
                  </HoverBox>
                )}
              </TrendingItem>
            ))}
          </TrendingContent>
        </TrendingFrame>
      </ContentFrame>
    </MainContainer>
  );
}
