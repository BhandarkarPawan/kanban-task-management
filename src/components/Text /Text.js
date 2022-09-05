import styled from "styled-components";

const Text = ({ size, children, ...delegated }) => {
    const Wrapper = size;
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const LWrapper = styled.p`
    font-size: var(--size-b-m);
    line-height: var(--line-b-m);
`;

const MWrapper = styled.p`
    font-size: var(--size-b-l);
    line-height: var(--line-b-l);
`;

export const BSIZE = {
    L: LWrapper,
    M: MWrapper,
};

export default Text;
