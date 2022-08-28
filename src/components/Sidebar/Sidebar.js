import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const Sidebar = ({
    boards,
    showSidebar,
    selectedBoard,
    setSelectedBoard,
    toggleTheme,
}) => {
    return (
        <Wrapper showSidebar={showSidebar}>
            <LogoWrapper>
                <Logo full />
            </LogoWrapper>
            <Stretched>
                <BoardGroup
                    boards={boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                />
            </Stretched>
            <Spacer />
            <ThemeToggle toggleTheme={toggleTheme} />
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: none;
    --space: 24px;
    --pad-h: 16px;

    @media ${QUERY.laptopAndUp} {
        --space: 32px;
        --pad-h: 24px;
    }

    @media ${QUERY.tabletAndUp} {
        background-color: ${({ theme }) => theme.backgroundLight};
        display: ${(props) => (props.showSidebar ? "flex" : "none")};
        flex-direction: column;
        justify-content: start;
        padding: 32px var(--pad-h);
        height: 100%;
        gap: 38px;
    }
`;

const LogoWrapper = styled.div`
    margin-left: 8px;
`;

const Stretched = styled.div`
    margin-left: calc(-1 * var(--pad-h));
    margin-right: calc(-1 * var(--pad-h));
`;

const Spacer = styled.div`
    flex: 1;
`;

export default Sidebar;
