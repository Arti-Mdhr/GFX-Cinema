import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import cap from '../../../public/assets/movieImages/captainAmerica.png'
import cha from '../../../public/assets/movieImages/chhaava.png'
import duk from '../../../public/assets/movieImages/dukhiAtma.png'
import tan from '../../../public/assets/movieImages/tandav.png'
import cra from '../../../public/assets/movieImages/Crazy.png'
import res from '../../../public/assets/movieImages/reshamPiriri.png'

export default function Home() {
  

  const trendingItems = [
    { name: "Captain America", img: cap},
    { name: "Chhaava", img: cha },
    { name: "Crazy", img: cra},
    { name: "Dukhi Aatma", img: duk },
    { name: "Pheri Resham Phiriri", img: res },
    { name: "Tandav", img: tan }
  ];

  return (
    <MainContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavTitle>
          GFX CINEMA
        </NavTitle>
        <NavItemsFrame>
          <Link to='/home'> <NavItems>Home</NavItems>  </Link>
          <Link to='/latest'> <NavItems>Coming Soon </NavItems> </Link>
          <Link to='/logout'><NavItems>Logout</NavItems></Link>

          
        </NavItemsFrame>
      </NavFrame>

      <ContentFrame>
        {/* Trending Pane */}
        <TrendingFrame>
          <TrendingIndicate>NOW SHOWING</TrendingIndicate>
          <TrendingContent>
            {trendingItems.map((item, index) => (
              <TrendingItem key={index}>
                <TrendingImage src={item.img} alt={item.name} />
                <TrendingName>{item.name}</TrendingName>
              </TrendingItem>
            ))}
          </TrendingContent>
        </TrendingFrame>
      </ContentFrame>
    </MainContainer>
  );
}
