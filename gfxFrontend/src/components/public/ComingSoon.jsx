import React, { useState } from 'react';
import { 
  MainContainer,
  NavFrame,
  NavItemsFrame,
  NavFrameRight,
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
} from '../../styles/LatestReleasesStyle';



import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const latestItems = [
    
  ];

  return (
    <MainContainer>
      {/* Navigation Pane */}
      <NavFrame>
        <NavItemsFrame>
          <Link to='/home'> <NavItems>Home</NavItems>  </Link>
          
          <Link to='/latest'> <NavItems>Latest Releases</NavItems> </Link>

          <Link to='/genre'> <NavItems>Genres</NavItems> </Link>
        </NavItemsFrame>
        <NavFrameRight>
          <Link to='/store'> <NavItems>Store</NavItems> </Link>
          <Link to='/favourites'> <NavItems>Favourites</NavItems> </Link>

          <NavItems>User</NavItems>
        </NavFrameRight>
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
                src={""} 
                title="Manga Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </LatestWebViewContainer>
          </div>
        ) : (
          <>
            {/* Trending Pane */}
            <LatestFrame>
              <LatestIndicate>Latest Releases</LatestIndicate>
              <LatestContent>
                {latestItems.map((item, index) => (
                  <LatestItem key={index} onClick={() => setSelectedUrl(item.url)}>
                    <LatestImage src={""} alt={item.name} />
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
