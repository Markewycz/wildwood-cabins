import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1rem;

  & input[type='checkbox'] {
    height: 1.5rem;
    width: 1.5rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type='checkbox']:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

type CheckedProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
  children: React.ReactNode;
};

function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}: CheckedProps) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ''}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
