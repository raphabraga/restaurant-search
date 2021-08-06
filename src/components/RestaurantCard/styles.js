import styled from 'styled-components';

export const StyRestaurantCard = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    border-left-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RCardTitle = styled.span`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
`;

export const RCardAddress = styled.span`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 10px;
  line-height: 14px;
`;

export const RCardPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;
