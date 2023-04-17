import { shade } from 'polished';
import styled from 'styled-components';

import { tokens } from 'styles/tokens';

type Button = {
  primaryColor: 'primary' | 'darkHigh' | 'dark' | 'darkLow';
  asLink?: boolean;
};

export const Button = styled.button<Button>`
  background: ${({ asLink, primaryColor }) =>
    asLink ? 'none' : tokens.colors[primaryColor]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ asLink, primaryColor }) =>
    asLink ? tokens.colors[primaryColor] : '#fff'};
  font: bold 18px 'Roboto', Arial, sans-serif;
  padding: 16px 32px;
  transition: all 0.1s linear;
  text-decoration: ${({ asLink }) => (asLink ? 'underline' : 'none')};

  &:hover,
  &:focus {
    background: ${({ asLink, primaryColor }) =>
      asLink ? 'none' : shade(0.2, tokens.colors[primaryColor])};
    color: ${({ asLink, primaryColor }) =>
      asLink ? shade(0.2, tokens.colors[primaryColor]) : '#fff'};
    outline: 0;
  }

  &:disabled,
  &.loading {
    background: ${({ asLink }) => (asLink ? 'none' : '#ddd')};
    color: #999;
    cursor: not-allowed;
  }

  .loading {
    background: url(/loading.svg) no-repeat;
    width: 24px;
    height: 24px;
    display: block;
    margin-left: 16px;
  }
`;
