import styled from "styled-components";

const Heading = ({ size, children, ...delegated }) => {
    const Wrapper = size;
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const H1Wrapper = styled.h1`
    font-size: var(--size-h-xl);
    line-height: var(--line-h-xl);
`;

const H2Wrapper = styled.h2`
    font-size: var(--size-h-l);
    line-height: var(--line-h-l);
`;

const H3Wrapper = styled.h3`
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
`;

const H4Wrapper = styled.h4`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
`;

export const HSIZE = {
    XL: H1Wrapper,
    L: H2Wrapper,
    M: H3Wrapper,
    S: H4Wrapper,
};

export default Heading;
