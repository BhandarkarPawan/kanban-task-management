import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";

const Button = ({
    themed = false,
    children,
    onClick,
    disabled,
    ...delegated
}) => {
    return (
        <Wrapper
            disabled={disabled}
            themed={themed}
            {...delegated}
            onClick={onClick}
        >
            <Label size={HSIZE.M}>{children}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    background-color: ${(props) =>
        props.disabled
            ? `var(--color-primary-light)`
            : props.themed
            ? props.theme.themedButtonColor
            : `var(--color-primary)`};
    color: ${(props) =>
        props.themed ? `var(--color-primary)` : `var(--color-white)`};
    padding: 13px 18px 12px 18px;
    border: none;
    border-radius: 5000px;

    &:hover {
        background-color: ${(props) =>
            props.themed
                ? props.theme.themedButtonHoverColor
                : `var(--color-primary-light)`};
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }
`;

export const DangerButton = ({ children, onClick, ...delegated }) => {
    return (
        <DangerWrapper {...delegated} onClick={onClick}>
            <Label size={HSIZE.M}>{children}</Label>
        </DangerWrapper>
    );
};

const DangerWrapper = styled.button`
    color: var(--color-white);
    padding: 13px 18px 12px 18px;
    border: none;
    border-radius: 5000px;
    background-color: var(--color-secondary-light);

    &:hover {
        background-color: var(--color-secondary);
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
