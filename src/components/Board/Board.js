import styled from "styled-components";
import TaskCard from "../TaskCard";

const Board = ({ board }) => {
    return (
        <Wrapper>
            {board.columns.map((column) => (
                <Column>
                    {column.tasks.map((task) => (
                        <TaskCard task={task} />
                    ))}
                </Column>
            ))}
            <AddColumnButton>+ New Column</AddColumnButton>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.background};
    height: 100%;
    width: 100%;
    grid-area: main;
    padding: 0px 22px; // TODO: Update this

    display: flex;
    gap: 20px;

    overflow-x: scroll;
    overflow-y: hidden; ;
`;

const Column = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 0;
    padding: 24px 2px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

// TODO: Make these button styles global
const AddColumnButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.backgroundDark};
    width: 280px;
    margin: 24px 0px;
    border-radius: var(--r-m);
    flex-shrink: 0;
    font-size: var(--size-h-xl);
    line-height: var(--line-h-xl);
    color: var(--color-gray-300);
`;

export default Board;
