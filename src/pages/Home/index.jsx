import React, { useState } from "react";
import { Container, SearchBox, Logo, Wrapper, Map } from "./styles";
import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Wrapper>
      <Container>
        <SearchBox>
          <Logo src={logo} alt="Restaurant Finder application logo" />
          <TextField
            label="Type your search"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={searchQuery}
              onChange={(e) => {
                console.log(searchQuery);
                return setSearchQuery(e.target.value);
              }}
            />
          </TextField>
        </SearchBox>
      </Container>
      <Map />
    </Wrapper>
  );
};
export default Home;
