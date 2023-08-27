import styled from "styled-components";
import { QUERY } from "../../constants";
import Button, { DangerButton } from "../Button/Button";
import Heading, { HSIZE } from "../Heading";
import Modal from "../Modal";
import Text, { BSIZE } from "../Text ";

const ConfirmModal = ({
    board = false,
    name,
    toggleModal,
    onChange,
    id,
    onConfirm,
    ...delegated
}) => {
    console.log("Renders");
    return (
        <Wrapper isOpen={true} toggleModal={toggleModal} {...delegated}>
            <EditTitle size={HSIZE.L}>
                Delete this {board ? "board" : "task"}?
            </EditTitle>
            <Text size={BSIZE.L}>
                {board
                    ? `Are you sure you want to delete the ‘${name}’ board? This action will remove all columns and tasks and cannot be reversed.`
                    : `Are you sure you want to delete the ‘${name}’ task and its subtasks? This action cannot be reversed`}
            </Text>
            <DangerButton
                onClick={() => {
                    onConfirm(id);
                }}
            >
                Delete
            </DangerButton>
            <Button
                themed
                onClick={() => {
                    onChange(false);
                }}
            >
                Cancel
            </Button>
        </Wrapper>
    );
};

const EditTitle = styled(Heading)`
    color: var(--color-secondary);
`;

// TODO: Maybe this modal can be made into a component
const Wrapper = styled(Modal)`
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 480px;
    border-radius: var(--r-m);
    width: min(100%, 480px);
    color: ${({ theme }) => theme.color};

    @media ${QUERY.tabletAndUp} {
        padding: 32px;
    }
`;

// TODO: Use drop down

export default ConfirmModal;
