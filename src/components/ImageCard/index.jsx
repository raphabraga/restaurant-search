import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PhotoTitle } from '../../pages/Home/styles';
import Skeleton from '../Skeleton';

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

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);
  return imageLoaded ? (
    <>
      <Card photo={photo}>{<PhotoTitle> {title} </PhotoTitle>}</Card>
    </>
  ) : (
    <Skeleton width="90px" height="90px" />
  );
};
export default ImageCard;
