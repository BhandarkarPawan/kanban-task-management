import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import BoardsList from "./components/BoardsList";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";

import data from "./data.json";
function App() {
    const [theme, setTheme] = useState(lightTheme);

    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return (
        <>
            <ResetStyles />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <button onClick={themeToggler}>Switch Theme</button>
                <Header></Header>
                <BoardsList boards={data.boards} />
            </ThemeProvider>
        </>
    );
}

export default App;
