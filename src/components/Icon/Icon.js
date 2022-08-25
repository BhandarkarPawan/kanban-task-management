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
            <img height={height} width={width} src={src} alt={label} />
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default Icon;
