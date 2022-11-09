import React from 'react';

import { ErrorWindowStyle,TextError } from '../styles';

type ErrorWindowProps = {
    message: string
};

export const ErrorWindow = ({ message }: ErrorWindowProps) => {
  return (
    <ErrorWindowStyle>
      <TextError>{message}</TextError>
    </ErrorWindowStyle>
  );
};

