import styled from 'styled-components/native';

import { Colors } from '../../constants/colors';

export const CoverBorder = styled.View`
  border-radius: 5px;
  border-width: 3px;
  border-color: ${Colors.GOLD};
`;

export const Cover = styled.Image`
  width: 100px;
  height: 120px;
`;
