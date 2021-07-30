import styled from "styled-components";

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
