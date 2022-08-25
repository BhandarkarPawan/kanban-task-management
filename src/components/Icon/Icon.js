import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export const ICON = {
    add: "icon-add-task-mobile.svg",
    board: "icon-board.svg",
};

const Icon = ({ icon, label }) => {
    const src = `assets/${ICON[icon]}`;

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <SVG src={src} alt={label} />
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
