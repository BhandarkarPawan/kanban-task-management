import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";
import Menu from "../Menu";
import Modal from "../Modal";
import StatusSelect from "../StatusSelect";
import SubTask from "../SubTask";

const TaskModal = ({ task, toggleModal, ...delegated }) => {
    const subTasks = task.subtasks;

    const completedSubtasks = subTasks.filter((st) => st.isCompleted);
    const [currentStatus, setCurrentStatus] = useState(task.status);

    return (
        <Modal center isOpen={!!task} toggleModal={toggleModal} {...delegated}>
            <Wrapper>
                <TaskTitle>
                    {task.title}
                    <Menu label="Task Options Menu" />
                </TaskTitle>
                {task.description && (
                    <TaskDescription>{task.description}</TaskDescription>
                )}
                <SubtaskSection>
                    <SectionTitle>
                        Subtasks ({completedSubtasks.length} of
                        {subTasks.length})
                    </SectionTitle>
                    <SubTaskList>
                        {subTasks.map((st, i) => {
                            const uniqueId = _uniqueId(`${i}`);
                            return (
                                <SubTask subtask={st} key={i} id={uniqueId} />
                            );
                        })}
                    </SubTaskList>
                </SubtaskSection>
                <StatusSection>
                    <SectionTitle>Current Status</SectionTitle>
                    <StatusSelect
                        id="statusSelector"
                        selected={currentStatus}
                        options={["Todo", "Doing", "Done"]}
                        onChange={setCurrentStatus}
                    />
                </StatusSection>
            </Wrapper>
        </Modal>
    );
};

const Wrapper = styled.div`
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
`;

const TaskTitle = styled.h2`
    font-size: var(--size-h-l);
    line-height: var(--line-h-l);
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: space-between;
`;

const TaskDescription = styled.p`
    font-size: var(--size-b-l);
    line-height: var(--line-b-l);
    color: var(--color-gray-300);
    font-weight: 500;
`;

const SubtaskSection = styled.section`
    color: ${({ theme }) => theme.color};
`;

const StatusSection = styled.section``;

const SectionTitle = styled.h3`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
    margin-bottom: 16px;
    color: var(--color-gray-300);
`;

const SubTaskList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

// TODO: Use drop down

export default TaskModal;
