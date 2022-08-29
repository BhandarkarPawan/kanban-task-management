import styled from "styled-components";
import TaskCard from "../TaskCard";

const Column = ({ column }) => {
    return (
        <Wrapper>
            {column.tasks.map((task) => (
                <TaskCard task={task} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    --pad-v: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 0;
    padding: var(--pad-v) 2px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    // For an improved scroll experience on mobile
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    scroll-padding: var(--pad-v) 0px;
`;

export default Column;
