import React from "react";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import Header from "../../components/header/Header";
import homeImg from "../../assets/books.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImg>
        <img src={homeImg} alt="home-img" />
      </HomeImg>

      <MainContainer>
        
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
