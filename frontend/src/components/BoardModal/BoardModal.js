import styled from "styled-components";
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
            <LabeledInput label="Name">
                <TextInput
                    value={board.name}
                    placeholder={PLACEHOLDER.textInput}
                    onChange={() => {}}
                />
            </LabeledInput>
            <LabeledInput label="Columns">
                <SubTaskEditList>
                    {board.columns.map((c, i) => (
                        <DynamicTextInput
                            key={i}
                            value={c.name}
                            onChange={() => {}}
                        />
                    ))}
                    <Button themed onClick={undefined}>
                        +Add New Column
                    </Button>
                </SubTaskEditList>
            </LabeledInput>
            <Button
                onClick={() => {
                    onChange(false);
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

// TODO: Use drop down

export default BoardModal;
