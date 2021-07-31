import React from "react";
import {
  StyRestaurantCard,
  RestaurantInfo,
  RCardTitle,
  RCardAddress,
} from "./styles";

const RestaurantCard = () => (
  <StyRestaurantCard>
    <RestaurantInfo>
      <RCardTitle>La Notizia</RCardTitle>
      <RCardAddress>Rua Leandro Dupre, 377</RCardAddress>
    </RestaurantInfo>
  </StyRestaurantCard>
);

export default RestaurantCard;
