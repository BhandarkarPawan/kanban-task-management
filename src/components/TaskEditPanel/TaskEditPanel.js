import { useState } from "react";
import styled from "styled-components";
import { PLACEHOLDER } from "../../constants";
import Button from "../Button";
import DynamicTextInput from "../DynamicTextInput";
import Heading, { HSIZE } from "../Heading";
import LabeledInput from "../LabeledInput";
import StatusSelect from "../StatusSelect";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

const TaskEditPanel = ({
    add = false,
    children,
    task,
    onChange,
    statusOptions,
    ...delegated
}) => {
    const subTasks = task.subtasks;
    const [currentStatus, setCurrentStatus] = useState(task.status);

    return (
        <>
            <EditTitle size={HSIZE.L}>
                {add ? "Add Task" : "Edit Task"}
            </EditTitle>
            <LabeledInput label="Title">
                <TextInput
                    value={task.title}
                    placeholder={PLACEHOLDER.textInput}
                    onChange={() => {}}
                />
            </LabeledInput>
            <LabeledInput label="Description">
                <TextArea
                    rows={4}
                    value={task.description}
                    placeholder={PLACEHOLDER.textArea}
                    onChange={() => {}}
                ></TextArea>
            </LabeledInput>
            <LabeledInput label="Subtasks">
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
            </LabeledInput>
            <LabeledInput label="Status">
                <StatusSelect
                    id="statusSelector"
                    value={currentStatus}
                    options={statusOptions}
                    onChange={setCurrentStatus}
                />
            </LabeledInput>
            <Button
                onClick={() => {
                    onChange(false);
                }}
            >
                {add ? "Create Task" : "Save Changes"}
            </Button>
        </>
    );
};

const EditTitle = styled(Heading)`
    color: ${({ theme }) => theme.color};
`;

const SubTaskEditList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default TaskEditPanel;
