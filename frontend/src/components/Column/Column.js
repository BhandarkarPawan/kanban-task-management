import { useDroppable } from "@dnd-kit/core";
import { useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "../../app-context";
import Button from "../Button";
import ConfirmModal from "../ConfirmModal";
import Heading, { HSIZE } from "../Heading";
import TaskCard from "../TaskCard";
import TaskModal from "../TaskModal";
import TextInput from "../TextInput";

const Column = ({
    id,
    board,
    setBoard,
    columnIndex,
    statusOptions,
    ...delegated
}) => {
    const context = useContext(AppContext);
    const column = board.columns[columnIndex];
    const allColumns = new Set(board.columns.map((c) => c.name));
    const tasksList = board.tasks.filter((t) => t.status._id === column._id);

    const [editingName, setEditingName] = useState(false);
    const [columnName, setColumnName] = useState(column.name);
    const [renamingErrorString, setRenamingErrorString] = useState("");
    const [selectedTaskID, setSelectedTaskId] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const toggleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    };

    const toggleModal = () => {
        setShowDetails(!showDetails);
        setSelectedTaskId(null);
    };
    const selectedTask = board.tasks.find((t) => t._id === selectedTaskID);

    const updateColumnName = (originalName, newName) => {
        const isDuplicate = allColumns.has(newName);
        setColumnName(newName);

        if (newName === "") {
            setRenamingErrorString("Column name cannot be empty");
            return;
        }

        if (isDuplicate && originalName !== newName) {
            setRenamingErrorString("Column name already exists");
            return;
        } else {
            setRenamingErrorString("");
        }

        setBoard({
            ...board,
            columns: board.columns.map((c, i) =>
                i === columnIndex ? { ...c, name: newName } : c
            ),
        });
    };

    const { isOver, setNodeRef } = useDroppable({
        id,
    });

    const handleDeleteTask = async (taskId) => {
        await context.apiClient.deleteTask(board._id, taskId);
        setBoard({
            ...board,
            tasks: board.tasks.filter((t) => t._id !== taskId),
        });

        toggleConfirmModal();
    };

    return (
        <Wrapper {...delegated}>
            {showConfirmModal && (
                <ConfirmModal
                    name={selectedTask.name}
                    toggleModal={toggleConfirmModal}
                    onChange={toggleConfirmModal}
                    id={selectedTask._id}
                    onConfirm={handleDeleteTask}
                />
            )}
            {selectedTask && (
                <TaskModal
                    statusOptions={statusOptions}
                    task={selectedTask}
                    toggleModal={toggleModal}
                    board={board}
                    setBoard={setBoard}
                    setShowConfirmModal={setShowConfirmModal}
                    columnId={column._id}
                />
            )}
            <Title size={HSIZE.L}>
                <Color color={column.color} />
                {editingName ? (
                    <NameEditForm>
                        <TextInput
                            value={columnName}
                            onChange={(e) =>
                                updateColumnName(columnName, e.target.value)
                            }
                        />
                        {renamingErrorString !== "" && (
                            <ErrorMessage>{renamingErrorString}</ErrorMessage>
                        )}
                    </NameEditForm>
                ) : (
                    <span onClick={() => setEditingName(!editingName)}>
                        {column.name}
                    </span>
                )}
            </Title>
            {editingName && (
                <SaveButton
                    onClick={() => setEditingName(!editingName)}
                    disabled={renamingErrorString !== ""}
                >
                    Save
                </SaveButton>
            )}
            <TaskList ref={setNodeRef} isOver={isOver}>
                {tasksList.map((task, i) => (
                    <TaskCard
                        id={id + "_" + i}
                        onClick={() => setSelectedTaskId(task._id)}
                        key={i}
                        task={task}
                    />
                ))}
            </TaskList>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    /* flex-shrink: 0; */
    display: flex;
    flex-direction: column;
    width: 280px;
    flex-shrink: 0;
`;

const Title = styled(Heading)`
    color: var(--color-gray-300);

    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 18px;
`;

const NameEditForm = styled.div``;
const SaveButton = styled(Button)`
    padding: 8px 16px;
    align-self: flex-start;
    font-size: 10px;
    border-radius: 4px;
    margin-top: -8px;
    margin-left: 27px;

    &:disabled {
        background-color: var(--color-gray-200);
        color: var(--color-gray-300);
    }
`;

const ErrorMessage = styled.p`
    font-size: 12px;
    color: var(--color-secondary);
    font-weight: 500;
    margin-top: 4px;
`;

const TaskList = styled.ul`
    --pad-v: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    border-radius: var(--r-l);

    // For an improved scroll experience on mobile
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    scroll-padding: var(--pad-v) 0px;

    &::-webkit-scrollbar {
        display: none;
    }

    background-color: ${(props) =>
        props.isOver ? props.theme.backgroundHighlight : "transparent"};

    padding: 0px 2px var(--pad-v) 2px;
    /* overflow-y: scroll; */

    & > *:first-child {
        // allows border of first card to be fully visible
        margin-top: 2px;
    }
`;

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    flex-shrink: 0;
`;

export default Column;
