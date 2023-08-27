import styled, { useTheme } from "styled-components";
import { QUERY } from "../../constants";
const Logo = ({ full, ...delegated }) => {
    const theme = useTheme();
    const imgSrc = full ? theme.logo : "/assets/logo-mobile.svg";
    return (
        <Wrapper full={full} {...delegated}>
            <source
                media={QUERY.tabletAndUp}
                srcSet={imgSrc}
                type="image/svg+xml"
            />
            <img alt="Logo" src={"assets/logo-mobile.svg"} />
        </Wrapper>
    );
};

const Wrapper = styled.picture`
    width: auto;
    display: grid;
`;

export default Logo;
