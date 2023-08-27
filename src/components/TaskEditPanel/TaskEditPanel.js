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
    task,
    onChange,
    statusOptions,
    ...delegated
}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(
        task.status ? task.status._id : Object.keys(statusOptions)[0]
    );
    const [subTasks, setSubTasks] = useState(task.subtasks);
    const [subtaskErrorString, seSubtaskErrorString] = useState("");

    console.log("subTasks", subTasks);

    const updateSubTask = (i, value) => {
        seSubtaskErrorString("");
        const newSubTasks = [...subTasks];
        newSubTasks[i].title = value;
        setSubTasks(newSubTasks);
    };

    const formComplete = title !== "" && !!status;

    const deleteSubTask = (i) => {
        seSubtaskErrorString("");
        if (subTasks.length === 1) {
            if (subTasks[0].title === "") {
                seSubtaskErrorString("Nothing to delete");
                return;
            } else {
                subTasks[0].title = "";
                setSubTasks(subTasks);
            }
            return;
        }
        setSubTasks(subTasks.filter((st, index) => index !== i));
    };

    const addNewSubTask = () => {
        if (subTasks.length && subTasks[subTasks.length - 1].title === "") {
            seSubtaskErrorString("Cannot add empty subtask");
            return;
        }

        setSubTasks([
            ...subTasks,
            {
                title: "",
                isCompleted: false,
            },
        ]);
    };

    const confirmChange = () => {
        if (title === "") {
            return;
        }

        const updatedTask = {
            _id: add ? null : task._id,
            title,
            description,
            status,
            subtasks: subTasks,
        };

        onChange(updatedTask);
    };

    return (
        <>
            <EditTitle size={HSIZE.L}>
                {add ? "Add Task" : "Edit Task"}
            </EditTitle>
            <LabeledInput label="Title">
                <TextInput
                    value={title}
                    placeholder={PLACEHOLDER.textInput}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </LabeledInput>
            <LabeledInput label="Description">
                <TextArea
                    rows={4}
                    value={description}
                    placeholder={PLACEHOLDER.textArea}
                    onChange={(e) => setDescription(e.target.value)}
                ></TextArea>
            </LabeledInput>
            <LabeledInput label="Subtasks">
                <SubTaskEditList>
                    {subTasks.map((st, i) => (
                        <DynamicTextInput
                            key={i}
                            value={st.title}
                            clearInput={() => deleteSubTask(i)}
                            onChange={(e) => updateSubTask(i, e.target.value)}
                        />
                    ))}
                    <ErrorMessage show={subtaskErrorString !== ""}>
                        {subtaskErrorString}
                    </ErrorMessage>
                    <Button themed onClick={addNewSubTask}>
                        +Add New Subtask
                    </Button>
                </SubTaskEditList>
            </LabeledInput>
            <LabeledInput label="Status">
                <StatusSelect
                    id="statusSelector"
                    value={status}
                    options={statusOptions}
                    onChange={setStatus}
                />
            </LabeledInput>
            <Button onClick={confirmChange} disabled={!formComplete}>
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

const ErrorMessage = styled.p`
    font-size: 12px;
    color: var(--color-secondary);
    font-weight: 500;
`;

export default TaskEditPanel;
