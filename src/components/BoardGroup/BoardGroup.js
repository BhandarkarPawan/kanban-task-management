import styled from "styled-components";
import { QUERY } from "../../constants";
import AddBoardButton from "../AddBoardButton";
import BoardOption from "../BoardOption";

const BoardGroup = ({
    boards,
    selectedBoard,
    setSelectedBoard,
    children,
    ...delegated
}) => {
    const TITLE = "All Boards  ";
    const ARIA_LABEL = `${TITLE} There are currently ${boards.length} boards`;

    return (
        <Wrapper {...delegated} role="radiogroup">
            <Title aria-label={ARIA_LABEL}>
                {TITLE}({boards.length})
            </Title>
            <Stretched>
                {boards.map((board, i) => {
                    return (
                        <BoardOption
                            name={TITLE}
                            key={i}
                            value={board}
                            checked={selectedBoard === board}
                            setSelectedBoard={setSelectedBoard}
                        >
                            {board.name}
                        </BoardOption>
                    );
                })}
                <AddBoardButton
                    onClick={() => {
                        console.log("TODO: Adds new board");
                    }}
                />
            </Stretched>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.fieldset`
    --space: 16px;

    @media ${QUERY.laptopAndUp} {
        --space: 24px;
    }

    border: none;
    padding: 16px var(--space);
    background-color: ${({ theme }) => theme.backgroundLight};
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    border-radius: var(--r-l);
`;

const Stretched = styled.ul`
    margin-left: calc(-1 * var(--space));
    margin-right: calc(-1 * var(--space));
`;

const Title = styled.h3`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
    text-transform: uppercase;
    letter-spacing: 2.4px;
    color: var(--color-gray-300);
    margin-left: 8px;
    margin-bottom: 3px;
`;
export default BoardGroup;
