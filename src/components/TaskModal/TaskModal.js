import { useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";

import Modal from "../Modal";

import TaskEditPanel from "../TaskEditPanel";
import TaskInfoPanel from "../TaskInfoPanel";

const TaskModal = ({ task, toggleModal, ...delegated }) => {
    const [editing, setEditing] = useState(false);

    return (
        <Wrapper
            center
            isOpen={!!task}
            toggleModal={toggleModal}
            {...delegated}
        >
            {editing ? (
                <TaskEditPanel task={task} setEditing={setEditing} />
            ) : (
                <TaskInfoPanel task={task} setEditing={setEditing} />
            )}
        </Wrapper>
    );
};

const Wrapper = styled(Modal)`
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 24px;
    position: relative;
    overflow: visible;

    @media ${QUERY.tabletAndUp} {
        padding: 32px;
    }

    display: flex;

    flex-direction: column;
    gap: 24px;
    max-width: 480px;
    border-radius: var(--r-m);
    isolation: isolate;

    width: min(100%, 480px);
`;

// TODO: Use drop down

export default TaskModal;
