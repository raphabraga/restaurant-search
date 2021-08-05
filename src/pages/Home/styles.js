import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const PhotoTitle = styled.span`
  color: black;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 16px;
  margin: 30px;
`;
