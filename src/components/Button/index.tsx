import { ButtonHTMLAttributes, FC } from 'react';

import * as S from './styles';

type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'darkHigh' | 'dark' | 'darkLow';
  loading?: boolean;
  asLink?: boolean;
};

const Button: FC<Button> = ({
  children,
  loading,
  asLink,
  color = 'primary',
  ...rest
}) => {
  return (
    <S.Button
      asLink={asLink}
      disabled={loading}
      title={loading ? 'Carregando' : String(children)}
      primaryColor={color}
      {...rest}
    >
      {loading ? 'Carregando' : children}
      {loading && <span className="loading"></span>}
    </S.Button>
  );
};

export default Button;
