import styled from "styled-components";
import AddBoardButton from "../AddBoardButton";
import Board from "../Board/Board";

const BoardsList = ({ boards, children }) => {
    const TITLE = "All Boards";

    return (
        <Wrapper role="radiogroup">
            <Title>
                {TITLE}({boards.length})
            </Title>
            <Stretched>
                {boards.map((board, i) => {
                    return (
                        <Board
                            name={TITLE}
                            key={i}
                            id={board.name}
                            type="radio"
                            value={board.name}
                        >
                            {board.name}
                        </Board>
                    );
                })}

                <AddBoardButton />
            </Stretched>
        </Wrapper>
    );
};

const Wrapper = styled.fieldset`
    --space: 24px;

    padding: 0;
    border: none;
    padding: var(--space);
    background-color: ${({ theme }) => theme.backgroundLight};
`;

const Stretched = styled.div`
    margin-left: calc(-1 * var(--space));
    margin-right: calc(-1 * var(--space));
`;

const Title = styled.h3`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
    text-transform: uppercase;
    letter-spacing: 2.4px;
    color: var(--color-gray-300);
    margin-bottom: 19px;
`;

const AddButton = styled.button`
    display: flex;
    color: var(--color-primary);
    align-items: baseline;
`;

const IconWrapper = styled.div`
    height: 7px;
    width: 7px;
`;

export default BoardsList;
