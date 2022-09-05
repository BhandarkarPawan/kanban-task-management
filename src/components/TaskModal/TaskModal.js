import { useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";

import Modal from "../Modal";

import TaskEditPanel from "../TaskEditPanel";
import TaskInfoPanel from "../TaskInfoPanel";

const TaskModal = ({
    task,
    statusOptions,
    add = false,
    toggleModal,
    ...delegated
}) => {
    const [editing, setEditing] = useState(false);

    const handleStartEdit = () => {
        setEditing(true);
    };

    const handleEndEdit = () => {
        setEditing(false);
    };

    const handleEndAdd = () => {
        console.log("New Task Will be Added");
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
