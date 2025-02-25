import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Container,
    RegisterBox,
    FormContainer,
    Title,
    Form,
    Label,
    Input,
    RegisterButton
 } from "../../styles/RegisterStyles";
import logo from '../../../public/assets/images/gfxLogo.png'

export default function RegisterPage () {
 
  return (
    <Container>
      <RegisterBox>
        <FormContainer>
          <Title>SIGN UP</Title>
          <Form >
          <Label>Username :</Label>
            <Input
              type="text"
              name="username"
             
            />
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

            <RegisterButton>Sign In</RegisterButton>
          </Form>
        </FormContainer>

      </RegisterBox>
    </Container>
  );
}

