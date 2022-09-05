import { useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";
import Button from "../Button";
import Column from "../Column";
import Heading from "../Heading";
import { HSIZE } from "../Heading/Heading";
import TaskModal from "../TaskModal";

const Board = ({ board, ...delegated }) => {
    const isEmpty = board.columns.length === 0;
    const [selectedTask, setSelectedTask] = useState(null);

    const [showDetails, setShowDetails] = useState(false);
    const toggleModal = () => {
        setShowDetails(!showDetails);
        setSelectedTask(null);
    };

    return (
        <Wrapper {...delegated}>
            {selectedTask && (
                <TaskModal task={selectedTask} toggleModal={toggleModal} />
            )}
            {isEmpty ? (
                <EmptyWrapper>
                    <Label>
                        This board is empty. Create a new column to get started.
                    </Label>
                    <Button
                        onClick={() => {
                            console.log("Adding new column");
                        }}
                    >
                        {/* Do not read "plus" on voiceover */}
                        <span aria-hidden>+</span>Add New Column
                    </Button>
                </EmptyWrapper>
            ) : (
                <>
                    {board.columns.map((column, i) => (
                        <Column
                            onTaskSelect={setSelectedTask}
                            key={i}
                            column={column}
                        />
                    ))}
                    <AddColumnButton>
                        <Heading size={HSIZE.XL}>+ New Column</Heading>
                    </AddColumnButton>
                </>
            )}
        </Wrapper>
    );
};

const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin: auto;
    text-align: center;

    @media ${QUERY.laptopAndUp} {
        gap: 32px;
    }
`;

const Label = styled.label`
    font-size: var(--sizeh-l);
    line-height: var(--line-h-l);
    color: var(--color-gray-300);
`;

const Wrapper = styled.main`
    --pad-h: 22px;

    background-color: ${({ theme }) => theme.background};
    height: 100%;
    width: 100%;
    grid-area: main;
    padding: 0px var(--pad-h); // TODO: Update this

    display: flex;
    gap: 20px;

    // For an improved scroll experience on mobile
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding: 0px var(--pad-h);

    /* Improve Scrollbar styles */
    &::-webkit-scrollbar {
        /* ... */
        background-color: ${({ theme }) => theme.background};
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        border-radius: 5000px;
        /* ... */
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

// TODO: Add comments everywhere
// TODO: Make these button styles global
const AddColumnButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.backgroundDark};

    width: 280px;
    margin-top: 60px;
    margin-bottom: 50px;
    border-radius: var(--r-m);
    flex-shrink: 0;
    color: var(--color-gray-300);

    // For an improved scroll experience on mobile
    scroll-snap-align: start;
`;

export default Board;
