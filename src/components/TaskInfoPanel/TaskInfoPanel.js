import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";
import Menu from "../Menu";
import StatusSelect from "../StatusSelect";
import SubTask from "../SubTask";
import Text, { BSIZE } from "../Text ";

const TaskInfoPanel = ({ children, task, setEditing, ...delegated }) => {
    const subTasks = task.subtasks;

    const completedSubtasks = subTasks.filter((st) => st.isCompleted);
    const [currentStatus, setCurrentStatus] = useState(task.status);

    const OPTIONS = [
        {
            label: "Edit Task",
            cb: () => {
                setEditing(true);
            },
            danger: false,
        },
        {
            label: "Delete Task",
            cb: () => {
                console.log("Now Deleted");
            },
            danger: true,
        },
    ];

    return (
        <>
            <TaskTitle size={HSIZE.L}>
                {task.title}
                <Menu options={OPTIONS} label="Task Options Menu" />
            </TaskTitle>
            {task.description && (
                <TaskDescription size={BSIZE.L}>
                    {task.description}
                </TaskDescription>
            )}
            <SubtaskSection>
                <SectionTitle size={HSIZE.S}>
                    Subtasks ({completedSubtasks.length} of
                    {subTasks.length})
                </SectionTitle>
                <SubTaskList>
                    {subTasks.map((st, i) => {
                        const uniqueId = _uniqueId(`${i}`);
                        return <SubTask subtask={st} key={i} id={uniqueId} />;
                    })}
                </SubTaskList>
            </SubtaskSection>
            <StatusSection>
                <SectionTitle size={HSIZE.S}>Current Status</SectionTitle>
                <StatusSelect
                    id="statusSelector"
                    selected={currentStatus}
                    options={["Todo", "Doing", "Done"]}
                    onChange={setCurrentStatus}
                />
            </StatusSection>
        </>
    );
};

const TaskTitle = styled(Heading)`
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: space-between;
`;

const TaskDescription = styled(Text)`
    color: var(--color-gray-300);
    font-weight: 500;
`;

const SubtaskSection = styled.section`
    color: ${({ theme }) => theme.color};
`;

const StatusSection = styled.section``;

const SectionTitle = styled(Heading)`
    color: var(--color-gray-300);
    margin-bottom: 8px;
`;

const SubTaskList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    gap: 8px;
`;

export default TaskInfoPanel;