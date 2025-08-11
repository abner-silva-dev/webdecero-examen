import styled from 'styled-components';

/**
 * A form input field component with label, error display and react-hook-form integration.
 *
 * @param props - Component props
 * @param props.label - Label text for the input
 * @param props.name - Name and id attribute for input
 * @param props.type - Input type (default: 'text')
 * @param props.register - React Hook Form register function
 * @param props.required - Whether the field is required (default: false)
 * @param props.placeholder - Placeholder text (default: '')
 * @param props.error - Validation error object (from react-hook-form)
 * @param props.validationRules - Validation rules object for react-hook-form register
 * @param props.dark - Whether to use dark styling (default: false)
 * @param props.capsule - Capsule color scheme object { primary, secondary }
 * @param props.expanded - If true or number, grid-column span for wrapper
 * @param props.horizontal - Layout input and label horizontally (default: false)
 * @param props.gap - Gap between label and input (default: '0.9rem')
 */

const InputField = ({
  label,
  name,
  type = 'text',
  register,
  required = false,
  placeholder = '',
  error,
  validationRules,
  dark = false,
  capsule = null,
  expanded,
  horizontal = false,
  gap = '0.9rem',
  ...rest
}) => {
  return (
    <Wrapper $expanded={expanded}>
      <InputWrapper $horizontal={horizontal} $gap={gap}>
        {label && (
          <Label htmlFor={name} $dark={dark} $capsule={capsule}>
            {label}
            {required && <Asterisk>*</Asterisk>}
          </Label>
        )}
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          $dark={dark}
          $capsule={capsule}
          {...(register ? register(name, validationRules) : {})}
          {...rest}
        />
      </InputWrapper>
      {error && (
        <ErrorText>{error.message || 'Este campo es obligatorio'}</ErrorText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;
  grid-column: ${({ $expanded }) =>
    $expanded === true
      ? '1 / -1'
      : typeof $expanded === 'number'
      ? `span ${$expanded}`
      : 'auto'};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${({ $horizontal }) => ($horizontal ? 'row' : 'column')};
  align-items: ${({ $horizontal }) => ($horizontal ? 'center' : 'flex-start')};
  gap: ${({ $gap }) => ($gap !== undefined ? $gap : '0.9rem')};
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: ${({ $dark, $capsule }) =>
    $capsule ? $capsule.primary : $dark ? '#e0e0e0' : '#343a40'};
`;

const Asterisk = styled.span`
  color: red;
  margin-left: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.558rem 0.75rem;
  border: 1px solid
    ${({ $dark, $capsule }) =>
      $capsule ? $capsule.primary : $dark ? '#444' : '#dee2e6'};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ $dark, $capsule }) =>
    $capsule ? $capsule.secondary : $dark ? '#1e1e1e' : '#fff'};
  color: ${({ $dark, $capsule }) =>
    $capsule ? $capsule.primary : $dark ? '#f1f1f1' : '#495057'};

  &::placeholder {
    color: #aaa;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${({ $capsule }) =>
      $capsule ? $capsule.primary : '#0070f3'};
  }

  &:disabled {
    background-color: #f8f9fa;
    color: #999;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export default InputField;
