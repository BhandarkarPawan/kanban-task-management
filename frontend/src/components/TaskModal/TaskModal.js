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
    setBoard,
    setShowConfirmModal,
    ...delegated
}) => {
    const context = useContext(AppContext);
    const [editing, setEditing] = useState(false);

    const handleStartEdit = () => {
        setEditing(true);
    };

    const handleEndEdit = async (updatedTask) => {
        const res = await context.apiClient.editTask(
            board._id,
            updatedTask.status,
            updatedTask._id,
            updatedTask.title,
            updatedTask.description,
            updatedTask.subtasks
        );

        setEditing(false);
        const updatedTaskList = [
            ...board.tasks.filter((t) => t._id !== updatedTask._id),
            res.data,
        ];

        setBoard({
            ...board,
            tasks: updatedTaskList,
        });
    };

    const handleEndAdd = async (task) => {
        const nonEmptySubTasks = task.subtasks.filter((st) => st.title !== "");
        const res = await context.apiClient.createTask(
            board._id,
            task.status,
            task.title,
            task.description,
            nonEmptySubTasks
        );

        const newTask = res.data;
        console.log("res: ", res);
        const updatedTaskList = [
            ...board.tasks.filter((t) => t._id !== newTask._id),
            newTask,
        ];

        setBoard({
            ...board,
            tasks: updatedTaskList,
        });

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
