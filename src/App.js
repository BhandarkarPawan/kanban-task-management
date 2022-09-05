import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Board from "./components/Board";
import BoardModal from "./components/BoardModal";
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
    const [addingTask, setAddingTask] = useState(false);
    const [editingBoard, setEditingBoard] = useState(false);
    const [addingBoard, setAddingBoard] = useState(false);

    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    const toggleSidebar = () => {
        setShowsSidebar(!showSidebar);
    };

    const toggleAddTaskModal = () => {
        setAddingTask(!addingTask);
    };

    const toggleEditBoard = () => {
        setEditingBoard(!editingBoard);
    };

    const toggleAddBoard = () => {
        setEditingBoard(!editingBoard);
        setAddingBoard(!addingBoard);
        console.log("nice");
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

    const emptyBoard = {
        name: "",
        columns: [
            {
                name: "",
                color: "#49C4E5",
                tasks: [],
            },
        ],
    };

    console.log(addingBoard, editingBoard);

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
                    toggleAddBoard={toggleAddBoard}
                />
                <Header
                    boards={data.boards}
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    toggleTheme={toggleTheme}
                    fullLogo={true}
                    showLogo={!showSidebar}
                    toggleAddModal={toggleAddTaskModal}
                    onChange={setEditingBoard}
                    toggleAddBoard={toggleAddBoard}
                ></Header>
                <Board statusOptions={statusOptions} board={selectedBoard} />
                {addingTask && (
                    <TaskModal
                        add
                        statusOptions={statusOptions}
                        task={emptyTask}
                        toggleModal={toggleAddTaskModal}
                    />
                )}
                {editingBoard && !addingBoard && (
                    <BoardModal
                        board={selectedBoard}
                        toggleModal={toggleEditBoard}
                        onChange={setEditingBoard}
                    />
                )}
                {addingBoard && (
                    <BoardModal
                        add={addingBoard}
                        board={emptyBoard}
                        toggleModal={toggleAddBoard}
                        onChange={toggleAddBoard}
                    />
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
