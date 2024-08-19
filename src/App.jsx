import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";


function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Login/>
      <Register/> */}
      <Cart/>
      <Footer />
    </>
  );
}

export default App;

