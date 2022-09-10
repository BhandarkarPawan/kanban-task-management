import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

export const ICON = {
    add: "icon-add-task-mobile.svg",
    board: "icon-board.svg",
    down: "icon-chevron-down.svg",
    up: "icon-chevron-up.svg",
    lightTheme: "icon-light-theme.svg",
    darkTheme: "icon-dark-theme.svg",
    hideSidebar: "icon-hide-sidebar.svg",
    showSidebar: "icon-show-sidebar.svg",
    menu: "icon-vertical-ellipsis.svg",
    close: "icon-cross.svg",
};

const Icon = ({ icon, label, ...delegated }) => {
    const src = `assets/${icon}`;

    return (
        <Wrapper {...delegated}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <SVG src={src} aria-hidden alt={label} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const SVG = styled.img`
    height: 100%;
    width: 100%;
    color: black;
`;

export default Icon;
