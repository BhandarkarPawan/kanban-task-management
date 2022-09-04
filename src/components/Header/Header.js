import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardSelect from "../BoardSelect";
import { ICON } from "../Icon";
import { ResponsiveIconButton } from "../IconButton/IconButton";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const Header = ({
    boards,
    selectedBoard,
    setSelectedBoard,
    toggleTheme,
    fullLogo,
    showLogo,
    ...delegated
}) => {
    return (
        <Wrapper {...delegated}>
            <LogoWrapper show={showLogo} full={fullLogo} />
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
    --pad: 16px 16px;

    @media ${QUERY.tabletAndUp} {
        --pad: 16px 24px;
    }

    @media ${QUERY.laptopAndUp} {
        --pad: 20px 32px 28px 24px;
    }

    background-color: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.color};
    width: 100%;
    padding: var(--pad);
    grid-area: header;

    display: flex;
    align-items: center;
    gap: 16px;
`;

const LogoWrapper = styled(Logo)`
    flex-shrink: 0;
    @media ${QUERY.tabletAndUp} {
        display: ${(props) => (props.show ? "inital" : "none")};
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

export default Header;
