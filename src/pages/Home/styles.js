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
  align-items: center;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;
