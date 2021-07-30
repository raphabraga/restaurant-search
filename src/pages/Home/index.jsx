import React, { useState } from "react";
import { Container, SearchBox } from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container>
      <SearchBox>
        <img src={logo} alt="Restaurant Finder application logo" />
        <TextField label="Type your search" outlined>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </TextField>
      </SearchBox>
    </Container>
  );
};
export default Home;
