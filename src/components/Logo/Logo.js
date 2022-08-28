import styled, { useTheme } from "styled-components";
const Logo = ({ full }) => {
    const theme = useTheme();

    const imgSrc = full ? theme.logo : "assets/logo-mobile.svg";

    return <Wrapper full={full} src={imgSrc} />;
};

const Wrapper = styled.img`
    height: 25px;
    width: ${(props) => (props.full ? 153 : 24)}px;
`;

export default Logo;
