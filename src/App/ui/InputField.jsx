import styled from 'styled-components';

function InputField({
  label,
  name,
  type = 'text',
  register,
  required = false,
  placeholder = '',
  error,
  validationRules,
  expanded,
  horizontal = false,
  gap = '0.9rem',
  ...rest
}) {
  return (
    <Wrapper>
      <Squire />
      <InputStyled
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...(register ? register(name, validationRules) : {})}
        {...rest}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Squire = styled.div`
  background-color: #495057;
  width: 5rem;
`;

const InputStyled = styled.input`
  padding: 1.5rem 3rem;
  background-color: #363b41;
  letter-spacing: 0.2rem;
  font-size: 1.6rem;
  color: #ced4da;
  border: none;
  width: 100%;

  &::placeholder {
    color: #adb5bd;
  }
`;

export default InputField;
