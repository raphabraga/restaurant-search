import React from "react";
import { Container, SearchBox } from "./styles";
import logo from "../../assets/logo4.svg";

const Home = () => (
  <Container>
    <SearchBox>
      <img src={logo} alt="Restaurant Finder application logo" />
    </SearchBox>
  </Container>
);

export default Home;
