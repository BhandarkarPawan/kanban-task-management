import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Heading, { HSIZE } from "../Heading";
import TaskCard from "../TaskCard";
import TextInput from "../TextInput";

const Column = ({ allColumns, column, onTaskSelect, ...delegated }) => {
    const numTasks = column.tasks.length;
    const [editingName, setEditingName] = useState(false);
    const [columnName, setColumnName] = useState(column.name);
    const [renamingErrorString, setRenamingErrorString] = useState("");

    const updateColumnName = (newName) => {
        const isDuplicate = allColumns.has(newName);
        if (isDuplicate) {
            setRenamingErrorString("Column name already exists");
            return;
        }
        setRenamingErrorString("");
        setColumnName(newName);
    };

    return (
        <Wrapper {...delegated}>
            <Title size={HSIZE.L}>
                <Color color={column.color} />
                {editingName ? (
                    <NameEditForm>
                        <TextInput
                            value={columnName}
                            onChange={(e) => updateColumnName(e.target.value)}
                        />
                        <ErrorMessage show={renamingErrorString !== ""}>
                            {renamingErrorString}
                        </ErrorMessage>
                    </NameEditForm>
                ) : (
                    <span onClick={() => setEditingName(!editingName)}>
                        {columnName}
                    </span>
                )}
            </Title>
            {editingName && (
                <SaveButton onClick={() => setEditingName(!editingName)}>
                    Save
                </SaveButton>
            )}
            <TaskList>
                {column.tasks.map((task, i) => (
                    <TaskCard onClick={onTaskSelect} key={i} task={task} />
                ))}
            </TaskList>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    /* flex-shrink: 0; */
    display: flex;
    flex-direction: column;
    width: 280px;
    flex-shrink: 0;
`;

const Title = styled(Heading)`
    color: var(--color-gray-300);

    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 18px;
`;

const NameEditForm = styled.div``;

const SaveButton = styled(Button)`
    padding: 8px 16px;
    align-self: flex-start;
    font-size: 10px;
    border-radius: 4px;
    margin-top: -8px;
    margin-left: 27px;
`;

const ErrorMessage = styled.p`
    font-size: 12px;
    color: var(--color-secondary);
    font-weight: 500;
`;

const TaskList = styled.ul`
    --pad-v: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    // For an improved scroll experience on mobile
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    scroll-padding: var(--pad-v) 0px;

    &::-webkit-scrollbar {
        display: none;
    }

    padding: 0px 2px var(--pad-v) 2px;
    overflow-y: scroll;

    & > *:first-child {
        // allows border of first card to be fully visible
        margin-top: 2px;
    }
`;

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    flex-shrink: 0;
`;

export default Column;
