import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";
import Icon, { ICON } from "../Icon";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

// TODO: Add a "skip to content" button for keyboard

const Sidebar = ({
    boards,
    showSidebar,
    toggleSidebar,
    selectedBoard,
    setSelectedBoard,
    toggleTheme,
    ...delegated
}) => {
    return showSidebar ? (
        <Wrapper {...delegated}>
            <LogoWrapper full />
            <Stretched>
                <BoardGroup
                    boards={boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                />
            </Stretched>
            <Spacer />
            <ToggleStretch>
                <ThemeToggle toggleTheme={toggleTheme} />
            </ToggleStretch>
            <HideSidebarButton onClick={toggleSidebar}>
                <HideIconWrapper icon={ICON.hideSidebar} label="Hide Sidebar" />
                <Label aria-hidden>Hide Sidebar</Label>
            </HideSidebarButton>
        </Wrapper>
    ) : (
        <ShowSidebarButton onClick={toggleSidebar}>
            <ShowIconWrapper icon={ICON.showSidebar} label="Show Sidebar" />
        </ShowSidebarButton>
    );
};

const Wrapper = styled.nav`
    display: none;
    --pad-h: 24px;
    grid-area: sidebar;

    @media ${QUERY.laptopAndUp} {
        --pad-h: 32px;
    }

    @media ${QUERY.tabletAndUp} {
        background-color: ${({ theme }) => theme.backgroundLight};
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 32px var(--pad-h);
        height: 100%;
        overflow: auto;
    }
`;

const LogoWrapper = styled(Logo)`
    margin-left: 2px;
    margin-bottom: 38px;
`;

const Stretched = styled.div`
    margin-left: calc(-1 * var(--pad-h));
    margin-right: calc(-1 * var(--pad-h));
`;

const HideSidebarButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: var(--r-s);
`;

const ShowSidebarButton = styled.button`
    display: none;

    @media ${QUERY.tabletAndUp} {
        display: initial;
        position: fixed;
        width: 56px;
        height: 48px;
        padding: 0px;
        border: none;
        background-color: var(--color-primary);
        border-radius: 0 5000px 5000px 0;
        bottom: 32px;
        left: 0px;
    }
`;

const HideIconWrapper = styled(Icon)`
    height: 16px;
    width: 18px;
`;

const ShowIconWrapper = styled(Icon)`
    height: 12px;
    width: 18px;
    margin-left: 16px;
    margin-right: 22px;
`;

const Label = styled.label`
    color: var(--color-gray-300);
`;

const Spacer = styled.div`
    flex: 1;
`;

const ToggleStretch = styled.div`
    margin-left: -12px;
    margin-right: -12px;
`;

export default Sidebar;
