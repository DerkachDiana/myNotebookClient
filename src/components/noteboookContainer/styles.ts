import styled from 'styled-components/native';

export const NotebookWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const NotebookName = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.color}
`;
