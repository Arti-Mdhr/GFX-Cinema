import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:206vh;
   background: url('/assets/images/loginBg.png')  no-repeat center center/cover;
`;

export const RegisterBox = styled.div`
  display: flex;
  flex-direction:column;
  width: 450px;
  height:750px;
  max-width: 90%;
  background-color: black;
  border: 2px solid black;
  margin-left:900px
 
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color:black;
  gap: 30px
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap:10px
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius:10px;
  border-bottom: 2px solid black;
  font-size: 16px;
  margin-bottom: 15px;
  background-color:#D9D9D9;
  outline: none;
  padding-left: 5px;

  &:focus {
    border-bottom: 2px solid #333;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 0px black;

  &:hover {
    background-color: #222;
    box-shadow: 2px 2px 0px black;
  }
`;

export const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 14px;
`;

export const RegisterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color:#FFFAF5;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const LoginRed= styled.p`
  background-color:black;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 250px
`;
