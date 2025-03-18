import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow: hidden;
  background-color: #1a1a1a; /* Dark background */
`;

export const NavFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  background-color: rgb(0, 0, 0);
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
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(131, 179, 207);
    transform: scale(1.09);
  }
`;

export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: rgb(22, 22, 22);
`;

/* Trending Section */
export const TrendingFrame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  margin-top: 10px;
  height: 100%;
  width: 100%;
`;

export const TrendingIndicate = styled.p`
  font-size: 24px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #f5f5f5;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const TrendingContent = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  overflow-x: auto;
  padding-left: 10px;
  gap: 20px; /* Add gap between movie cards */
`;

export const TrendingImage = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;

  /* Hide image if src is empty */
  &:not([src]),
  &[src=""] {
    display: none;
  }
`;

export const TrendingName = styled.p`
  font-size: 18px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  color: #d1d1d1;
  margin-top: 5px;
  text-align: center;
`;

export const HoverBox = styled.div`
  position: absolute;
  top: 100%; /* Position below the movie card */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  z-index: 10;
`;

export const HoverOption = styled.p`
  font-size: 16px;
  font-family: "Inconsolata", monospace;
  font-weight: 500;
  color: #f5f5f5;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #ffcc00;
    color: black;
    border-radius: 4px;
  }
`;

export const TrendingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  cursor: pointer;
  position: relative; /* To position HoverBox correctly */
  margin-bottom: 20px; /* Add margin to create space for hover box */

  &:hover {
    transform: scale(1.05);
  }
`;