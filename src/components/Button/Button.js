import styled from "styled-components";

const Button = ({ children }) => {
    return (
        <Wrapper>
            <Label>{children}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    background-color: var(--color-primary);
`;

const Label = styled.h3``;

export default Button;
