import React from "react";
import {
  StyRestaurantCard,
  RestaurantInfo,
  RCardTitle,
  RCardAddress,
  RCardPhoto,
} from "./styles";
import ReactStars from "react-rating-stars-component";
import logo from "../../assets/logo.svg";

const RestaurantCard = () => (
  <StyRestaurantCard>
    <RestaurantInfo>
      <RCardTitle>La Notizia</RCardTitle>
      <ReactStars
        count={5}
        isHalf
        edit={false}
        value={4}
        activeColor={"#e7711c"}
      />
      <RCardAddress>Rua Leandro Dupre, 377</RCardAddress>
    </RestaurantInfo>
    <RCardPhoto src={logo}></RCardPhoto>
  </StyRestaurantCard>
);

export default RestaurantCard;
