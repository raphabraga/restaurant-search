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
    margin-right: 30px;
  }
`;

export const PhotoTitle = styled.span`
  color: white;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 12px;
  line-height: 16px;
  margin: 3px 0;
`;

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: props => props.theme.fonts.primary;
  color: props => props.theme.colors.text;
  line-heigth: 29px;
  font-size: 24px;
  font-weigth: bold;
`;

export const ModalContent = styled.div`
  margin-bottom: 10px;
  font-family: props => props.theme.fonts.primary;
  color: props => props.theme.colors.text;
  line-heigth: 18px;
  font-size: 15px;
  font-weigth: normal;
`;
