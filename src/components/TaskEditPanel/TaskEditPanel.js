import { useState } from "react";
import styled from "styled-components";
import { PLACEHOLDER } from "../../constants";
import Button from "../Button";
import DynamicTextInput from "../DynamicTextInput";
import Heading, { HSIZE } from "../Heading";
import StatusSelect from "../StatusSelect";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

const TaskEditPanel = ({ children, task, setEditing, ...delegated }) => {
    const subTasks = task.subtasks;
    const [currentStatus, setCurrentStatus] = useState(task.status);

    return (
        <>
            <EditTitle size={HSIZE.L}>Edit Task</EditTitle>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Title</SectionTitle>
                <TextInput
                    value={task.title}
                    placeholder={PLACEHOLDER.textInput}
                    onChange={() => {}}
                />
            </EditSection>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Description</SectionTitle>
                <TextArea
                    rows={4}
                    value={task.description}
                    placeholder={PLACEHOLDER.textArea}
                    onChange={() => {}}
                ></TextArea>
            </EditSection>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Subtasks</SectionTitle>
                <SubTaskEditList>
                    {subTasks.map((st, i) => (
                        <DynamicTextInput
                            key={i}
                            value={st.title}
                            onChange={() => {}}
                        />
                    ))}
                    <Button themed onClick={undefined}>
                        +Add New Subtask
                    </Button>
                </SubTaskEditList>
            </EditSection>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Status</SectionTitle>
                <StatusSelect
                    id="statusSelector"
                    selected={currentStatus}
                    options={["Todo", "Doing", "Done"]}
                    onChange={setCurrentStatus}
                />
            </EditSection>
            <Button
                onClick={() => {
                    setEditing(false);
                }}
            >
                Save Changes
            </Button>
        </>
    );
};

const SectionTitle = styled(Heading)`
    color: var(--color-gray-300);
    margin-bottom: 8px;
`;

const EditSection = styled.section``;

const EditTitle = styled(Heading)`
    color: ${({ theme }) => theme.color};
`;

const SubTaskEditList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default TaskEditPanel;
