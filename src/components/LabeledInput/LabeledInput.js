import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";

const LabeledInput = ({ children, label, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            <SectionTitle size={HSIZE.S}>{label}</SectionTitle>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const SectionTitle = styled(Heading)`
    color: var(--color-gray-300);
    margin-bottom: 8px;
`;

export default LabeledInput;
