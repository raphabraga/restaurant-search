import React, { useState } from 'react';
import {
  StyRestaurantCard,
  RestaurantInfo,
  RCardTitle,
  RCardAddress,
  RCardPhoto,
} from './styles';
import ReactStars from 'react-rating-stars-component';
import notRendered from '../../assets/not-rendered.png';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyRestaurantCard onClick={onClick}>
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
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : notRendered}
        alt=""
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </StyRestaurantCard>
  );
};

export default RestaurantCard;
