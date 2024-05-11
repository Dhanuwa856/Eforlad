import React from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Travel from "./Components/Travel/Travel";
import Weekend from "./Components/Weekend/Weekend";
import BestTours from "./Components/BestTours/BestTours";
import Book from "./Components/Book/Book";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <About />
      <Travel />
      <Weekend />
      <BestTours />
      <Book />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
