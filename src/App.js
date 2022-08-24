import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
    const [theme, setTheme] = useState(lightTheme);

    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    console.log(theme);
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <button onClick={themeToggler}>Switch Theme</button>
                <Header></Header>
            </ThemeProvider>
        </>
    );
}

export default App;
