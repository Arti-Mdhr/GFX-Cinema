import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginBox,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  LoginButton,
  RegisterLink,
  RegisterText,
  ImageContainer,

} from "../../styles/LoginStyles.js"
import logo from '../../../public/assets/images/gfxLogo.png'

export default function LoginPage () {
 
  return (
    <Container>
      <LoginBox>
      <ImageContainer>
          <img src={logo} alt="Login Illustration" />
        </ImageContainer>
        <FormContainer>
          <Title>SIGN IN</Title>
          <Form >
            <Label>Email :</Label>
            <Input
              type="email"
              name="email"
             
            />

            <Label>Password :</Label>
            <Input
              type="password"
              name="password"
              
            />

            <LoginButton >Sign In</LoginButton>
          </Form>

          <RegisterText>
            Don’t Have An Account?{" "}
            <RegisterLink href="/register">Register Here</RegisterLink>
          </RegisterText>
        </FormContainer>


      </LoginBox>
    </Container>
  );
}

