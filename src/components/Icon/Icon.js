import styled from "styled-components";

export const ICON = {
    add: "icon-add-task-mobile.svg",
};

const Icon = (icon, { children }) => {
    return (
        <Wrapper>
            <img src={ICON[icon]} />
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default Icon;
