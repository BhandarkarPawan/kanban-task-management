import styled from "styled-components";
import Button from "../Button/Button";

const Header = ({ children }) => {
    return (
        <Wrapper>
            <Button>Add New Task</Button>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 16px;
`;

export default Header;
