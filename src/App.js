import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import data from "./data.json";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [selectedBoard, setSelectedBoard] = useState(data.boards[0]);

    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return (
        <>
            <ResetStyles />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <TempWrapper>
                    <Button onClick={toggleTheme}>Switch Theme</Button>
                </TempWrapper>
                <Header
                    boards={data.boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    toggleTheme={toggleTheme}
                ></Header>
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
