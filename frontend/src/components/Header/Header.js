import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardSelect from "../BoardSelect";
import { ICON } from "../Icon";
import { ResponsiveIconButton } from "../IconButton/IconButton";
import Logo from "../Logo";
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";

const Header = ({
    boards,
    selectedBoard,
    setSelectedBoard,
    toggleTheme,
    fullLogo,
    showLogo,
    toggleAddModal,
    onChange,
    toggleAddBoard,
    toggleConfirmModal,
    ...delegated
}) => {
    const OPTIONS = [
        {
            label: "Edit Board",
            cb: () => {
                onChange(true);
            },
            danger: false,
        },
        {
            label: "Delete Board",
            cb: () => {
                toggleConfirmModal();
            },
            danger: true,
        },
    ];

    return (
        <Wrapper {...delegated}>
            <LogoWrapper show={showLogo} full={fullLogo} />
            <BoardSelectWrapper
                showLogo={showLogo}
                boards={boards}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
                toggleAddBoard={toggleAddBoard}
            >
                <ThemeToggle toggleTheme={toggleTheme} />
            </BoardSelectWrapper>
            <ResponsiveIconButtonWrapper
                onClick={toggleAddModal}
                icon={ICON.add}
                label="Add New Task"
            >
                Add New Task
            </ResponsiveIconButtonWrapper>
            <MenuWrapper options={OPTIONS} label={"Board Options Menu"} />
        </Wrapper>
    );
};

const Wrapper = styled.header`
    --pad-t: 16px;
    --pad-r: 16px;
    --pad-b: 16px;
    --pad-l: 16px;

    @media ${QUERY.tabletAndUp} {
        --pad-t: 16px;
        --pad-r: 24px;
        --pad-b: 16px;
        --pad-l: 24px;
    }

    @media ${QUERY.laptopAndUp} {
        --pad-t: 20px;
        --pad-r: 32px;
        --pad-b: 28px;
        --pad-l: 24px;
    }

    background-color: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.color};
    width: 100%;
    padding: var(--pad-t) var(--pad-r) var(--pad-b) var(--pad-l);
    grid-area: header;

    display: flex;
    align-items: center;
    border-bottom: ${({ theme }) => theme.border};
`;

const ResponsiveIconButtonWrapper = styled(ResponsiveIconButton)`
    margin-left: auto;

    margin-right: 16px;
    @media ${QUERY.tabletAndUp} {
        margin-right: 24px;
    }
`;

const LogoWrapper = styled(Logo)`
    flex-shrink: 0;
    margin-top: calc(-1 * var(--pad-t));
    margin-bottom: calc(-1 * var(--pad-b));
    align-self: stretch;
    padding-right: 16px;

    @media ${QUERY.tabletAndUp} {
        display: ${(props) => (props.show ? "inital" : "none")};
        border-right: ${({ theme }) => theme.border};
        padding-right: 24px;
    }

    @media ${QUERY.laptopAndUp} {
        padding-right: 32px;
    }
`;

const BoardSelectWrapper = styled(BoardSelect)`
    @media ${QUERY.tabletAndUp} {
        margin-left: ${(props) => props.showLogo && "24px"};
    }

    @media ${QUERY.laptopAndUp} {
        margin-left: ${(props) => props.showLogo && "32px"};
    }
`;

const MenuWrapper = styled(Menu)`
    margin-top: 24px;
`;

export default Header;
