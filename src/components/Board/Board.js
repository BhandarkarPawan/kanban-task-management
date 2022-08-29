import styled from "styled-components";
import Column from "../Column";

const Board = ({ board }) => {
    return (
        <Wrapper>
            {board.columns.map((column) => (
                <Column column={column} />
            ))}
            <AddColumnButton>+ New Column</AddColumnButton>
        </Wrapper>
    );
};

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
`;

// TODO: Add comments everywhere
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

    // For an improved scroll experience on mobile
    scroll-snap-align: start;
`;

export default Board;
