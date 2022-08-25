import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export const ICON = {
    add: "icon-add-task-mobile.svg",
};

const Icon = ({ icon, label, height, width }) => {
    const src = `assets/${ICON[icon]}`;

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <img src={src} alt={label} />
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
`;

export default Icon;
