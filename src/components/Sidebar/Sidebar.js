import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";
import Icon, { ICON } from "../Icon";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const Sidebar = ({
    boards,
    showSidebar,
    toggleSidebar,
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
            <ToggleStretch>
                <ThemeToggle toggleTheme={toggleTheme} />
            </ToggleStretch>
            <HideSidebar role="button" onClick={toggleSidebar}>
                {/* TODO: Remove IconWrapper */}
                <IconWrapper>
                    <Icon icon={ICON.hideSidebar} label="Hide Sidebar" />
                </IconWrapper>
                <Label>Hide Sidebar</Label>
            </HideSidebar>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: none;
    --pad-h: 24px;

    @media ${QUERY.laptopAndUp} {
        --pad-h: 32px;
    }

    @media ${QUERY.tabletAndUp} {
        background-color: ${({ theme }) => theme.backgroundLight};
        display: ${(props) => (props.showSidebar ? "flex" : "none")};
        flex-direction: column;
        justify-content: start;
        padding: 32px var(--pad-h);
        height: 100%;
    }
`;

const LogoWrapper = styled.div`
    margin-left: 2px;
    margin-bottom: 38px;
`;

const Stretched = styled.div`
    margin-left: calc(-1 * var(--pad-h));
    margin-right: calc(-1 * var(--pad-h));
`;

const HideSidebar = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const IconWrapper = styled.div`
    height: 16px;
    width: 18px;
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
