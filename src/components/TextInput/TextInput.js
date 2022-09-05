import styled from "styled-components";
import { PLACEHOLDER } from "../../constants";

const TextInput = ({ value, onChange, ...delegated }) => {
    return (
        <Wrapper
            {...delegated}
            value={value}
            onChange={onChange}
            placeholder={PLACEHOLDER.textInput}
        ></Wrapper>
    );
};

const Wrapper = styled.input`
    border: 1px solid var(--color-input-border);
    border-radius: var(--r-s);
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.backgroundLight};
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    width: 100%;
    font-size: var(--size-b-l);
    line-height: var(--line-b-l);

    &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.placeholderColor};
    }
`;

export default TextInput;
