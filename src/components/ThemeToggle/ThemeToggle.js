import styled, { useTheme } from "styled-components";
import { QUERY } from "../../constants";
import { darkTheme } from "../../styles/themes";
import Icon, { ICON } from "../Icon";
import Toggle from "../Toggle";

const ThemeToggle = ({ toggleTheme, ...delegated }) => {
    const theme = useTheme();

    return (
        <Wrapper {...delegated}>
            <LightIconWrapper Icon label="Light Theme" icon={ICON.lightTheme} />
            <Toggle isOn={theme !== darkTheme} onChange={toggleTheme} />
            <DarkIconWrapper label="Dark Theme" icon={ICON.darkTheme} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 24px;
    padding: 14px;
    background-color: ${({ theme }) => theme.background};
    border-radius: var(--r-m);
    justify-content: center;
    width: 235px;

    @media ${QUERY.laptopAndUp} {
        width: 251px;
    }
`;

const LightIconWrapper = styled(Icon)`
    height: 18.33px;
    width: 18.33px;
`;

const DarkIconWrapper = styled(Icon)`
    height: 15px;
    width: 15px;
`;

export default ThemeToggle;
