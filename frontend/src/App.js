import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Board from "./components/Board";
import BoardModal from "./components/BoardModal";
import ConfirmModal from "./components/ConfirmModal";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskModal from "./components/TaskModal";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";
import data from "./data.json";

async function getData() {
    const data = await fetch("http://localhost:3000/boards", {
        mode: "cors",
    })
    return data.json();
}

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [selectedBoard, setSelectedBoard] = useState(data.boards[0]);
    const [showSidebar, setShowsSidebar] = useState(false);
    const [addingTask, setAddingTask] = useState(false);
    const [editingBoard, setEditingBoard] = useState(false);
    const [addingBoard, setAddingBoard] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

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
    };

    const toggleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
        console.log("nice: ", showConfirmModal);
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

    useEffect(()=>{
        async function fetchData() {
            data = await getData();
            setSelectedBoard(data.boards[0]);
        };
        fetchData();
    })

    return (
        !data?<></>:
        <>
            <ResetStyles/>
            <GlobalStyles/>
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
                    toggleConfirmModal={toggleConfirmModal}
                ></Header>
                <Board statusOptions={statusOptions} board={selectedBoard}/>
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
                {showConfirmModal && (
                    <ConfirmModal
                        name={selectedBoard.name}
                        board
                        toggleModal={toggleConfirmModal}
                        onChange={toggleConfirmModal}
                    />
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
