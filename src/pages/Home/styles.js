import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
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
