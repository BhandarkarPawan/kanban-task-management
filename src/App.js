import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import data from "./data.json";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [selectedBoard, setSelectedBoard] = useState(data.boards[0]);
    const [showSidebar, setShowsSidebar] = useState(false);

    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    const toggleSidebar = () => {
        showSidebar ? setShowsSidebar(false) : setShowsSidebar(true);
    };

    return (
        <>
            <ResetStyles />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Sidebar
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    showSidebar={showSidebar}
                    boards={data.boards}
                    toggleTheme={toggleTheme}
                    toggleSidebar={toggleSidebar}
                />
                <Header
                    boards={data.boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    toggleTheme={toggleTheme}
                    fullLogo={false}
                    showLogo={!showSidebar}
                ></Header>
                <Main></Main>
            </ThemeProvider>
        </>
    );
}

export const Main = styled.main`
    background-color: ${({ theme }) => theme.background};
    height: 100%;
    width: 100%;

    grid-area: main;
`;

export default App;
