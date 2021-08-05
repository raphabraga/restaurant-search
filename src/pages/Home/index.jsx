import React, { useState } from 'react';
import {
  Container,
  SearchBox,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
} from './styles';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map } from '../../components/index';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPressed(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

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
              value={inputValue}
              onKeyPress={handleKeyPressed}
              onChange={(e) => {
                return setInputValue(e.target.value);
              }}
            />
          </TextField>
          <CarouselTitle>Close to you</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={logo} title="Restaurant Name" />
          </Carousel>
          <RestaurantCard />
        </SearchBox>
      </Container>
      <Map query={query} />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
      ></Modal>
    </Wrapper>
  );
};
export default Home;
