import React from 'react';
import {
  StyRestaurantCard,
  RestaurantInfo,
  RCardTitle,
  RCardAddress,
  RCardPhoto,
} from './styles';
import ReactStars from 'react-rating-stars-component';
import notRendered from '../../assets/not-rendered.png';

const RestaurantCard = ({ restaurant }) => (
  <StyRestaurantCard>
    <RestaurantInfo>
      <RCardTitle>{restaurant.name}</RCardTitle>
      <ReactStars
        count={5}
        isHalf
        edit={false}
        value={restaurant.rating}
        activeColor={'#e7711c'}
      />
      <RCardAddress>{restaurant.vicinity}</RCardAddress>
    </RestaurantInfo>
    <RCardPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : notRendered}
      alt=""
    ></RCardPhoto>
  </StyRestaurantCard>
);

export default RestaurantCard;
