import React, { useState } from 'react';
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavTitle,
  NavItems,
  ContentFrame,
  LatestContent,
  LatestFrame,
  LatestIndicate,
  LatestItem,
  LatestName,
  LatestImage,
  LatestWebViewContainer,
  LatestWebViewIframe,
  LatestBackButton
} from '../../styles/ComingSoonStyle';



import { Link } from 'react-router-dom';
import dor from '../../../public/assets/movieImages/dori.png'
import mic from '../../../public/assets/movieImages/mickey.png'
import ovr from '../../../public/assets/movieImages/overload.png'
import pit from '../../../public/assets/movieImages/pitambar.png'

export default function comingSoon() {
  const [selectedUrl, setSelectedUrl] = useState(null);

   const comingSoon = [
     { name: "Dori", img: dor},
     { name: "Mickey 17", img: mic },
     { name: "Overload", img: ovr},
     { name: "Pitambar", img: pit },
   
    
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
          <Link to='//comingSoon'> <NavItems>Coming Soon </NavItems> </Link>
          <NavItems>Logout</NavItems>

          
        </NavItemsFrame>
      </NavFrame>


      <ContentFrame>
        {/* If an item is selected, show the WebView (iframe) */}
        {selectedUrl ? (
          <div>
            <LatestBackButton onClick={() => setSelectedUrl(null)}>
              Go Back
            </LatestBackButton>
            
            <LatestWebViewContainer>
              <LatestWebViewIframe 
                src={selectedUrl} 
                title="Ticket Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </LatestWebViewContainer>
          </div>
        ) : (
          <>
            {/* Trending Pane */}
            <LatestFrame>
              <LatestIndicate>Coming Soon</LatestIndicate>
              <LatestContent>
                {comingSoon.map((item, index) => (
                  <LatestItem key={index} onClick={() => setSelectedUrl(item.url)}>
                    <LatestImage src={item.img} alt={item.name} />
                    <LatestName>{item.name}</LatestName>
                  </LatestItem>
                ))}
              </LatestContent>
            </LatestFrame>
          </>
        )}
      </ContentFrame>
    </MainContainer>
  );
}
