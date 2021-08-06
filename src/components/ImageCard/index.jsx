import React from 'react';
import styled from 'styled-components';
import { PhotoTitle } from '../../pages/Home/styles';

const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>{<PhotoTitle> {title} </PhotoTitle>}</Card>
);
export default ImageCard;
