import styled from "styled-components";

const Template = ({ children, ...delegated }) => {
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div``;

export default Template;
