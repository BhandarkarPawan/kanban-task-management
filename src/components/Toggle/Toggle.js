import styled from "styled-components";

const Toggle = ({ isOn, onChange }) => {
    return (
        <Wrapper
            type="button"
            role="switch"
            aria-checked={isOn ? "false" : "true"}
            id="speakerPower"
            aria-label="Dark Mode"
            onClick={onChange}
        >
            <Knob isOn={isOn} />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    height: 20px;
    width: 40px;
    background-color: var(--color-primary);
    border: none;
    border-radius: 5000px;
    padding: 3px;
`;

const Knob = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: white;

    transform: ${(props) =>
        props.isOn ? "translateX(0px)" : "translateX(20px)"};
    transition: transform 500ms ease;
`;

export default Toggle;
