import React from "react";
import Navbar from "../components/others/Navbar";
import Header from "../components/HomeComponent/Header";
import Header2 from "../components/HomeComponent/Header2";
import Footer from "../components/others/Footer";
import Achievment from "../components/HomeComponent/Achievment";



const HomePage = () => {
  return (
    <>
     <Navbar/>
      <Header/>
   <Header2/>
    <Achievment/>
      
      <Footer/>
    
    </>
  );
};

export default HomePage;
