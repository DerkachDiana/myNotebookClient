import styled from 'styled-components/native';

export const BackgroundColor = styled.View`
  flex: 1;
  background-color: ${(props) => props.color};
`;

export const MyImg = styled.ImageBackground`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 20px;
`;
