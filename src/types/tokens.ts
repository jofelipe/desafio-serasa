export type Tokens = {
  heading: Heading;
  colors: Colors;
};

type Colors = {
  primary: string;
  darkHigh: string;
  dark: string;
  darkLow: string;
  light: string;
  lightHigh: string;
  text: string;
  success: string;
  error: string;
};

type Heading = {
  display: Sizes;
  large: Sizes;
  medium: Sizes;
  small: Sizes;
  xsmall: Sizes;
  sub: Sizes;
};

type Sizes = {
  fontSize: Variations;
  lineHeight: Variations;
};

type Variations = {
  desktop: string;
  mobile: string;
};
