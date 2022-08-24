import styled from "styled-components";
import Icon from "../Icon/Icon";

const Button = ({ icon, label, children }) => {
    return (
        <Wrapper>
            {icon && label && <Icon icon={icon} label={label} />}
            <Label>{children}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
`;

const Label = styled.h3``;

export default Button;
