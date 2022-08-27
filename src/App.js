import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import data from "./data.json";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [selectedBoard, setSelectedBoard] = useState(data.boards[0]);

    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return (
        <>
            <ResetStyles />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                {/* <TempWrapper>
                    <Button onClick={themeToggler}>Switch Theme</Button>
                </TempWrapper>
                <Header
                    boards={data.boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                ></Header> */}
                <ThemeToggle selectedTheme={theme} toggleTheme={themeToggler} />
            </ThemeProvider>
        </>
    );
}

const TempWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
`;

export default App;
