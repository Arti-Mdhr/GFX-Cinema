import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./components/public/Login.jsx"));
const Register = lazy(()=> import ("./components/public/Registration.jsx"));
const Home = lazy(()=> import ("./components/public/Home.jsx"));
const ComingSoon = lazy(()=> import ("./components/public/ComingSoon.jsx"));
const MovieDetails = lazy(()=> import ("./components/public/MovieDetails.jsx"));

function App() {
  return (
    <Router>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comingSoon" element={<ComingSoon />}/>
          <Route path="/movie/:id" element={<MovieDetails />}/>
      
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
