import styled from "styled-components";

const Logo = () => {
    return <Wrapper />;
};

const Wrapper = styled.div`
    background-image: ${({ theme }) => theme.logo};
    height: 25px;
    width: 24px;
`;

export default Logo;
