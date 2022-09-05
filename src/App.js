import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskModal from "./components/TaskModal";
import data from "./data.json";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [selectedBoard, setSelectedBoard] = useState(data.boards[0]);
    const [showSidebar, setShowsSidebar] = useState(false);
    const [addingBoard, setAddingBoard] = useState(false);

    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    const toggleSidebar = () => {
        setShowsSidebar(!showSidebar);
    };

    const toggleAddModal = () => {
        setAddingBoard(!addingBoard);
    };

    const statusOptions = selectedBoard.columns.map((c) => c.name);

    const emptyTask = {
        title: "",
        description: "",
        status: statusOptions[0],
        subtasks: [
            {
                title: "",
                isCompleted: false,
            },
        ],
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
                    fullLogo={true}
                    showLogo={!showSidebar}
                    toggleAddModal={toggleAddModal}
                ></Header>
                <Board statusOptions={statusOptions} board={data.boards[0]} />
                {addingBoard && (
                    <TaskModal
                        add
                        statusOptions={statusOptions}
                        task={emptyTask}
                        toggleModal={toggleAddModal}
                    />
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
