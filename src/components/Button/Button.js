import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";

const Button = ({ children, onClick, ...delegated }) => {
    return (
        <Wrapper {...delegated} onClick={onClick}>
            <Label size={HSIZE.M}>{children}</Label>
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

const Label = styled(Heading)`
    display: flex;
    align-items: baseline;
    gap: 4px;
`;

export default Button;
