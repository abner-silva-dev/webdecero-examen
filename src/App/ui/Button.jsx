import styled from 'styled-components';

const size = {
  small: '1.2rem',
  medium: '1.4rem',
  large: '1.6rem',
};

const Button = styled.button`
  padding: ${(props) => (props.size ? size[props.size] : size.medium)};
  background-color: ${(props) => props.bgColor || 'var(--secondary-color)'};
  color: #fff;

  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Button;
