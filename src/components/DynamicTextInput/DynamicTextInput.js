import styled from "styled-components";
import Icon, { ICON } from "../Icon";
import TextInput from "../TextInput";

const DynamicTextInput = ({ value, onChange, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            <TextInput value={value} onChange={onChange}></TextInput>
            <DeleteButton>
                <CloseIconWrapper icon={ICON.close} label="Delete Subtask" />
            </DeleteButton>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    display: flex;
    gap: 16px;
`;

const CloseIconWrapper = styled(Icon)`
    height: 15px;
    width: 15px;
`;

const DeleteButton = styled.button`
    flex-shrink: 0;
    border: none;
    background-color: transparent;
    padding: 0;
`;

export default DynamicTextInput;
