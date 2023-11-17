import React from 'react';
import { Btn } from './Button.styled';

const Button = ({ handleClick }) => (
  <Btn onClick={handleClick}>Load more</Btn>
);

export default Button;
