import styled from 'styled-components';

export const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   width: 100vw;
   flex-direction: column;
   overflow: hidden;
`;

export const NavFrame = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px;
   width: 100vw;
   background-color:rgb(0, 0, 0);
   padding: 0 20px;
   box-sizing: border-box;
`;

export const NavTitle = styled.p`
  font-size: 24px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const NavItemsFrame = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
`;

export const NavItems = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5;
   cursor: pointer;
   transition: all 0.3s ease-in-out;

   &:hover {
      color:rgb(131, 179, 207);
      transform: scale(1.09);
   }
`;

export const UserMenuContainer = styled.div`
   position: relative;
   display: inline-block;
`;

export const UserMenuDropdown = styled.div`
   position: absolute;
   top: 100%;
   left: 0;
   background-color: #333;
   border-radius: 5px;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   min-width: 120px;
   z-index: 1000;
`;

export const UserMenuItem = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   color: white;
   padding: 10px 20px;
   cursor: pointer;

   &:hover {
      background-color: #ffcc00;
   }
`;

export const ContentFrame = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 100%;
   background-color:rgb(22, 22, 22);
`;

/* Trending Section */
export const TrendingFrame = styled.div`
   display: flex;
   flex-direction: column;
   background-color:rgb(0, 0, 0);
   margin-top: 10px;
   height: 300px;
   width: 100%;
`;

export const TrendingIndicate = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5;
   margin-left: 20px;
   margin-bottom: 20px;  /* Added margin to create space */
`;

export const TrendingContent = styled.div`
   display: flex;
   height: 300px;
   width: 100%;
   background-color:rgb(0, 0, 0);
   overflow-x: auto;
   padding-left: 10px;
`;

export const TrendingItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 150px;
   cursor: pointer;

   &:hover {
      transform: scale(1.05);
   }
`;

export const TrendingImage = styled.img`
   width: 120px;
   height: 180px;
   border-radius: 5px;
   object-fit: cover;

   /* Hide image if src is empty */
   &:not([src]), &[src=""] {
      display: none;
   }
`;

export const TrendingName = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #d1d1d1;
   margin-top: 5px;
   text-align: center;
`;

/* Recommended Section */
export const RecommendedFrame = styled.div`
   display: flex;
   flex-direction: column;
   height: 340px;
   width: 100%;
   background-color:rgb(0, 0, 0);
`;

export const RecommendIndicate = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #f5f5f5;
   margin-left: 20px;
`;

export const RecommendContent = styled.div`
   display: flex;
   height: 300px;
   width: 100%;
   padding-left: 10px;
   overflow-x: auto;
`;

export const RecommendItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 150px;
   cursor: pointer;

   &:hover {
      transform: scale(1.05);
   }
`;

export const RecommendImage = styled.img`
   width: 120px;
   height: 180px;
   border-radius: 5px;
   object-fit: cover;

   /* Hide image if src is empty */
   &:not([src]), &[src=""] {
      display: none;
   }
`;

export const RecommendName = styled.p`
   font-size: 18px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: #d1d1d1;
   margin-top: 5px;
   text-align: center;
`;

/* WebView for Selected Content */
export const WebViewContainer = styled.div`
   width: 100%;
   height: 600px;
   overflow: hidden;
   position: relative;
`;

export const WebViewIframe = styled.iframe`
   width: 100%;
   height: 100%;
   border: none;
`;

/* Back Button */
export const BackButton = styled.button`
   margin-bottom: 10px;
   padding: 8px 16px;
   border-radius: 8px;
   border: none;
   background-color: #ff4d4d;
   color: white;
   cursor: pointer;

   &:hover {
      background-color: #ff3333;
   }
`;
