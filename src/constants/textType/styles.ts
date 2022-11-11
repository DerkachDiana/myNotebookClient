import styled from 'styled-components';

import { Colors } from '../colors';

export const TextStyle = styled.Text`
  font-size: ${(props) => props.textType.size};
  color: ${Colors.WHITE};
  font-family: 'playfair_display_regular';
  `;
