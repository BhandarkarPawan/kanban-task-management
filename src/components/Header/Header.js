import styled from "styled-components";
import { ResponsiveIconButton } from "../IconButton/IconButton";

const Header = () => {
    return (
        <Wrapper>
            <ResponsiveIconButton
                icon="add"
                label="Add New Task"
                height="12px"
                width="12px"
                responsive
            >
                Add New Task
            </ResponsiveIconButton>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 16px;
`;

export default Header;
