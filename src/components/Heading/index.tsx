import styled, { css } from 'styled-components';
import { tokens } from 'styles/tokens';

type Heading = {
  color?: keyof typeof tokens.colors;
  size?: keyof typeof tokens.heading;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const handleLetterSpacing = (size: keyof typeof tokens.heading) => {
  switch (size) {
    case 'display':
      return '-1.2px';
    case 'large':
      return '-1px';
    case 'medium':
      return '-.8px';
    case 'small':
      return '-.6px';
    default:
      return '0';
  }
};

const Heading = styled('h1').attrs<Heading>(({ level = 1 }) => ({
  as: `h${level}`,
}))<Heading>`
  ${({ color = 'primary', size = 'display' }) => css`
    font-size: ${tokens.heading[size].fontSize.desktop};
    line-height: ${tokens.heading[size].lineHeight.desktop};
    color: ${tokens.colors[color]};
    font-weight: 700;
    letter-spacing: ${() => handleLetterSpacing(size)};

    @media (max-width: 767px) {
      font-size: ${tokens.heading[size].fontSize.mobile};
      line-height: ${tokens.heading[size].lineHeight.mobile};
    }
  `}
`;

export default Heading;
