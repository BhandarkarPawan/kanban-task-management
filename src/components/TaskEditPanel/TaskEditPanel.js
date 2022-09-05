import { useState } from "react";
import styled from "styled-components";
import { PLACEHOLDER } from "../../constants";
import Button from "../Button";
import Heading, { HSIZE } from "../Heading";
import Icon, { ICON } from "../Icon";
import StatusSelect from "../StatusSelect";

const TaskEditPanel = ({ children, task, setEditing, ...delegated }) => {
    const subTasks = task.subtasks;
    const [currentStatus, setCurrentStatus] = useState(task.status);

    return (
        <>
            <EditTitle size={HSIZE.L}>Edit Task</EditTitle>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Title</SectionTitle>
                <TextInput placeholder={PLACEHOLDER.textInput}></TextInput>
            </EditSection>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Description</SectionTitle>
                <TextArea
                    rows={4}
                    placeholder={PLACEHOLDER.textArea}
                ></TextArea>
            </EditSection>
            <EditSection>
                <SectionTitle size={HSIZE.S}>Subtasks</SectionTitle>
                <SubTaskEditList>
                    {subTasks.map((st, i) => (
                        <DynamicTextInput key={i}>
                            <TextInput
                                placeholder={PLACEHOLDER.subTask[i]}
                            ></TextInput>
                            <DeleteButton>
                                <CloseIconWrapper
                                    icon={ICON.close}
                                    label="Delete Subtask"
                                />
                            </DeleteButton>
                        </DynamicTextInput>
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

const CloseIconWrapper = styled(Icon)`
    height: 15px;
    width: 15px;
`;

const DeleteButton = styled.button`
    flex-shrink: 0;
    border: none;
    background-color: transparent;
    padding: 0;
`;

const EditTitle = styled(Heading)`
    color: ${({ theme }) => theme.color};
`;

const DynamicTextInput = styled.li`
    display: flex;
    gap: 16px;
`;

const SubTaskEditList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TextInput = styled.input`
    border: 1px solid var(--color-input-border);
    border-radius: var(--r-s);
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.backgroundLight};
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    width: 100%;

    &::placeholder {
        font-weight: 500;
        font-size: var(--size-b-l);
        line-height: var(--line-b-l);
        color: ${({ theme }) => theme.placeholderColor};
    }
`;

const TextArea = styled.textarea`
    border: 1px solid var(--color-input-border);
    border-radius: var(--r-s);
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.backgroundLight};
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    width: 100%;

    &::placeholder {
        font-weight: 500;
        font-size: var(--size-b-l);
        line-height: var(--line-b-l);
        color: ${({ theme }) => theme.placeholderColor};
    }
`;

export default TaskEditPanel;
