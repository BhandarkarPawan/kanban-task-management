import styled from "styled-components";

const Header = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.header``;

export default Header;
