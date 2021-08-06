import React, { useState } from 'react';
import {
  Container,
  SearchBox,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from './styles';
import logo from '../../assets/logo.svg';
import notRendered from '../../assets/not-rendered.png';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map } from '../../components/index';
import { useSelector } from 'react-redux';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, selectedRestaurant } = useSelector(
    (state) => state.restaurants
  );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
            {restaurants.map((el) => (
              <Card
                key={el.place_id}
                photo={el.photos ? el.photos[0].getUrl() : notRendered}
                title={el.name}
              />
            ))}
          </Carousel>
          {restaurants.map((el) => (
            <RestaurantCard
              onClick={() => handleOpenModal(el.place_id)}
              key={el.place_id}
              restaurant={el}
            />
          ))}
        </SearchBox>
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{selectedRestaurant?.name}</ModalTitle>
        <ModalContent>
          {selectedRestaurant?.formatted_phone_number}
        </ModalContent>
        <ModalContent>{selectedRestaurant?.formatted_address}</ModalContent>
        <ModalContent>
          {selectedRestaurant?.opening_hours?.open_now
            ? 'Aberto agora :)'
            : 'Fechado nesse momento :('}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};
export default Home;
