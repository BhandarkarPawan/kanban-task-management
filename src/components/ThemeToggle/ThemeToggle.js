import styled from "styled-components";
import { darkTheme } from "../../styles/themes";
import Icon, { ICON } from "../Icon/Icon";
import Toggle from "../Toggle";

const ThemeToggle = ({ selectedTheme, toggleTheme }) => {
    return (
        <Wrapper>
            <LightIconWrapper>
                <Icon icon={ICON.lightTheme} />
            </LightIconWrapper>
            <Toggle isOn={selectedTheme === darkTheme} onChange={toggleTheme} />
            <DarkIconWrapper>
                <Icon icon={ICON.darkTheme} />
            </DarkIconWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 24px;
    padding: 14px;
    background-color: ${({ theme }) => theme.background};
    width: 235px;
    border-radius: var(--r-m);
    display: flex;
    justify-content: center;
`;

const LightIconWrapper = styled.div`
    height: 18.33px;
    width: 18.33px;
`;

const DarkIconWrapper = styled.div`
    height: 15px;
    width: 15px;
`;

export default ThemeToggle;
