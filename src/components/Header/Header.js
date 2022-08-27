import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardSelect from "../BoardSelect";
import { ICON } from "../Icon";
import { ResponsiveIconButton } from "../IconButton/IconButton";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const Header = ({ boards, selectedBoard, setSelectedBoard, toggleTheme }) => {
    return (
        <Wrapper>
            <Logo />
            <BoardSelect
                boards={boards}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
            >
                <ThemeToggle toggleTheme={toggleTheme} />
            </BoardSelect>
            <Spacer />
            <ResponsiveIconButton icon={ICON.add} label="Add New Task">
                Add New Task
            </ResponsiveIconButton>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.color};
    width: 100%;
    padding: 16px;

    display: flex;
    align-items: center;
    gap: 16px;

    @media ${QUERY.tabletAndUp} {
        padding: 24px 16px;
    }

    @media ${QUERY.laptopAndUp} {
        padding: 20px 32px 28px 32px;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

export default Header;
