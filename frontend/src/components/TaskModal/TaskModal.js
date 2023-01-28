import { useContext, useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";

import Modal from "../Modal";

import AppContext from "../../app-context";
import TaskEditPanel from "../TaskEditPanel";
import TaskInfoPanel from "../TaskInfoPanel";

const TaskModal = ({
    task,
    statusOptions,
    add = false,
    toggleModal,
    board,
    columnId,
    setShowConfirmModal,
    ...delegated
}) => {
    const context = useContext(AppContext);
    const [editing, setEditing] = useState(false);

    console.log("board: ", board);

    const handleStartEdit = () => {
        setEditing(true);
    };

    const handleEndEdit = async (updatedTask) => {
        context.apiClient.createTask(
            board._id,
            columnId,
            updatedTask.title,
            updatedTask.description,
            updatedTask.subtasks
        );
        setEditing(false);
    };

    const handleEndAdd = async (newTask) => {
        const res = await context.apiClient.createTask(
            board._id,
            newTask.status,
            newTask.title,
            newTask.description,
            newTask.subtasks
        );

        const task = res.data;
        console.log("task: ", task);

        toggleModal(false);
    };

    return (
        <Wrapper
            center
            isOpen={!!task}
            toggleModal={toggleModal}
            {...delegated}
        >
            {add ? (
                <TaskEditPanel
                    statusOptions={statusOptions}
                    add
                    task={task}
                    onChange={handleEndAdd}
                />
            ) : editing ? (
                <TaskEditPanel
                    statusOptions={statusOptions}
                    task={task}
                    onChange={handleEndEdit}
                />
            ) : (
                <TaskInfoPanel
                    statusOptions={statusOptions}
                    task={task}
                    onChange={handleStartEdit}
                    setShowConfirmModal={setShowConfirmModal}
                />
            )}
        </Wrapper>
    );
};

const Wrapper = styled(Modal)`
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 480px;
    border-radius: var(--r-m);
    isolation: isolate;
    width: min(100%, 480px);

    @media ${QUERY.tabletAndUp} {
        padding: 32px;
    }
`;

// TODO: Use drop down

export default TaskModal;
