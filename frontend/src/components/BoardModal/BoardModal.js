import { useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "../../app-context";
import { PLACEHOLDER, QUERY } from "../../constants";
import Button from "../Button";
import DynamicTextInput from "../DynamicTextInput";
import Heading, { HSIZE } from "../Heading";
import LabeledInput from "../LabeledInput";
import Modal from "../Modal";
import TextInput from "../TextInput";

const BoardModal = ({
    board,
    add = false,
    toggleModal,
    onChange,
    ...delegated
}) => {
    const context = useContext(AppContext);
    const [name, setName] = useState(board.name);
    const [columns, setColumns] = useState(board.columns);
    const [nameErrorString, setNameErrorString] = useState("");
    const [columnErrorString, setColumnErrorString] = useState("");

    const updateName = (value) => {
        setName(value);
        setNameErrorString("");
    };

    const updateColumns = (i, value) => {
        setColumnErrorString("");
        const newColumns = [...columns];
        newColumns[i].name = value;
        setColumns(newColumns);
    };

    const deleteColumn = (i) => {
        setColumnErrorString("");
        if (columns.length === 1) {
            setColumnErrorString("Cannot delete last column");
            return;
        }
        setColumns(columns.filter((c, index) => index !== i));
    };

    const addNewColumn = () => {
        if (columns[columns.length - 1].name === "") {
            setColumnErrorString("Cannot add empty column");
            return;
        }

        setColumns([
            ...columns,
            {
                name: "",
                color: "#49C4E5",
                tasks: [],
            },
        ]);
    };

    const createBoard = async () => {
        var error = false;
        if (name === "") {
            setNameErrorString("Name cannot be empty");
            error = true;
        }
        if (columns.length === 1 && columns[0].name === "") {
            setColumnErrorString("Cannot create board with empty column");
            error = true;
        }

        if (error) {
            return;
        }

        if (columns[columns.length - 1].name === "") {
            deleteColumn(columns.length - 1);
        }
        console.log("create board: ", {
            name,
            columns,
        });
        const board = await context.apiClient.createBoard(name, columns);

        onChange(false);
    };

    return (
        <Wrapper
            center
            isOpen={!!board}
            toggleModal={toggleModal}
            {...delegated}
        >
            <EditTitle size={HSIZE.L}>
                {add ? "Add New Board" : "Edit Board"}
            </EditTitle>
            <FieldWithError>
                <LabeledInput label="Name">
                    <TextInput
                        value={name}
                        placeholder={PLACEHOLDER.textInput}
                        onChange={(e) => updateName(e.target.value)}
                    />
                </LabeledInput>
                <ErrorMessage show={nameErrorString !== ""}>
                    {nameErrorString}
                </ErrorMessage>
            </FieldWithError>
            <LabeledInput label="Columns">
                <FieldWithError>
                    <SubTaskEditList>
                        {columns.map((c, i) => (
                            <DynamicTextInput
                                key={i}
                                value={c.name}
                                onChange={(e) =>
                                    updateColumns(i, e.target.value)
                                }
                                clearInput={() => deleteColumn(i)}
                            />
                        ))}
                        <ErrorMessage show={columnErrorString !== ""}>
                            {columnErrorString}
                        </ErrorMessage>
                    </SubTaskEditList>
                </FieldWithError>
                <AddColumnButton themed onClick={addNewColumn}>
                    +Add New Column
                </AddColumnButton>
            </LabeledInput>

            <Button
                onClick={() => {
                    createBoard();
                }}
            >
                {add ? "Create New Board" : "Save Changes"}
            </Button>
        </Wrapper>
    );
};

const EditTitle = styled(Heading)`
    color: ${({ theme }) => theme.color};
`;

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

const AddColumnButton = styled(Button)`
    margin-top: 12px;
    text-align: center;
    width: 100%;
`;

const FieldWithError = styled.div``;

// TODO: Use drop down

export default BoardModal;
