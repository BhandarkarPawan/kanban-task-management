import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";

const Button = ({ themed = false, children, onClick, ...delegated }) => {
    return (
        <Wrapper themed={themed} {...delegated} onClick={onClick}>
            <Label size={HSIZE.M}>{children}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    background-color: ${(props) =>
        props.themed ? props.theme.themedButtonColor : `var(--color-primary)`};
    color: ${(props) =>
        props.themed ? `var(--color-primary)` : `var(--color-white)`};
    padding: 13px 18px 12px 18px;
    border: none;
    border-radius: 5000px;

    &:hover {
        background-color: ${(props) =>
            props.themed
                ? `var(--color-themed-button-hover)`
                : `var(--color-primary-light)`};
        cursor: pointer;
    }
`;

const Label = styled(Heading)`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
`;

export default Button;
