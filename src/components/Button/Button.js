import styled from "styled-components";

const Button = ({ children, onClick, ...delegated }) => {
    return (
        <Wrapper {...delegated} onClick={onClick}>
            <Label>{children}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    background-color: var(--color-primary);
    color: white;
    padding: 13px 18px 12px 18px;
    border: none;
    border-radius: 5000px;

    &:hover {
        background-color: var(--color-primary-light);
        cursor: pointer;
    }
`;

const Label = styled.div`
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
    display: flex;
    align-items: baseline;
    gap: 4px;
`;

export default Button;
