import styled from "styled-components";
import Button from "../Button/Button";

const Header = ({ children }) => {
    return (
        <Wrapper>
            <Button icon="add" label="Add New Task">
                Add New Column
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 16px;
`;

export default Header;
