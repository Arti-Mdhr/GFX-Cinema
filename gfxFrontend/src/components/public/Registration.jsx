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
import { registerApi } from "../../apis/api";

export default function RegisterPage () {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false, // Default to false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;
    if (!username || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      console.log("Submitting Registration Data:", formData);
      const res = await registerApi(formData);

      if (res.status === 201) {
        toast.success(res.data.message || "Registration successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(res.data.message || "Registration failed!");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
 
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
              value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
            disabled={loading}
             
            />
            <Label>Email :</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
            />

            <Label>Password :</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
              disabled={loading}
              
            />

            <RegisterButton type="submit" disabled={loading}>
              Sign Up
              </RegisterButton>
          </Form>
        </FormContainer>

      </RegisterBox>
    </Container>
  );
}

