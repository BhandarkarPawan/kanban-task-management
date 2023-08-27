import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import AppContext from "./app-context";
import Board from "./components/Board";
import BoardModal from "./components/BoardModal";
import ConfirmModal from "./components/ConfirmModal";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskModal from "./components/TaskModal";
import GlobalStyles from "./styles/globalStyles";
import ResetStyles from "./styles/resetStyles";
import { darkTheme, lightTheme } from "./styles/themes";
function App() {
    const context = useContext(AppContext);

    const [boards, setBoards] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [theme, setTheme] = useState(lightTheme);
    const [showSidebar, setShowsSidebar] = useState(true);
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

    const statusOptions = selectedBoard
        ? selectedBoard.columns.reduce((acc, column) => {
              acc[column._id] = column.name;
              return acc;
          }, {})
        : {};

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

    if (!boards) {
        context.apiClient &&
            context.apiClient.getBoards().then((res) => {
                setBoards(res.data);
                res.data.length && setSelectedBoard(res.data[0]);
            });
    }

    const handleDeleteBoard = async (id) => {
        await context.apiClient.deleteBoard(id);
        setBoards(boards.filter((b) => b._id !== id));
        setSelectedBoard(null);
        toggleConfirmModal();
    };

    // const [parent, setParent] = useState(null);
    // const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

    // function handleDragEnd({ over }) {
    //     setParent(over ? over.id : null);
    // }

    // return (
    //     <DndContext onDragEnd={handleDragEnd}>
    //         {!parent ? draggable : null}
    //         <Droppable id="droppable">
    //             {parent === "droppable" ? draggable : "Drop here"}
    //         </Droppable>
    //     </DndContext>
    // );

    return (
        <>
            <ResetStyles />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Sidebar
                    selectedBoard={selectedBoard}
                    setSelectedBoard={setSelectedBoard}
                    showSidebar={showSidebar}
                    boards={boards || []}
                    toggleTheme={toggleTheme}
                    toggleSidebar={toggleSidebar}
                    toggleAddBoard={toggleAddBoard}
                />
                <Header
                    boards={boards || []}
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
                <Board
                    statusOptions={statusOptions}
                    board={selectedBoard}
                    setBoard={setSelectedBoard}
                />
                {addingTask && (
                    <TaskModal
                        add
                        statusOptions={statusOptions}
                        task={emptyTask}
                        board={selectedBoard}
                        setBoard={setSelectedBoard}
                        toggleModal={toggleAddTaskModal}
                        setShowConfirmModal={setShowConfirmModal}
                    />
                )}
                {editingBoard && !addingBoard && (
                    <BoardModal
                        board={selectedBoard}
                        toggleModal={toggleEditBoard}
                        onChange={setEditingBoard}
                        setBoards={setBoards}
                        selectedBoard={selectedBoard}
                        setSelectedBoard={setSelectedBoard}
                        boards={boards}
                    />
                )}
                {addingBoard && (
                    <BoardModal
                        add={addingBoard}
                        board={emptyBoard}
                        toggleModal={toggleAddBoard}
                        onChange={toggleAddBoard}
                        setBoards={setBoards}
                        selectedBoard={selectedBoard}
                        setSelectedBoard={setSelectedBoard}
                        boards={boards}
                    />
                )}
                {showConfirmModal && (
                    <ConfirmModal
                        name={selectedBoard.name}
                        board
                        id={selectedBoard._id}
                        toggleModal={toggleConfirmModal}
                        onChange={toggleConfirmModal}
                        onConfirm={handleDeleteBoard}
                    />
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
