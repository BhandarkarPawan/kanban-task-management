import styled from "styled-components";

const Button = ({ children }) => {
    return (
        <Wrapper>
            <Label>Add New Task</Label>
        </Wrapper>
    );
};

const Wrapper = styled.button``;

const Label = styled.h3``;

export default Button;
