import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Icon, { ICON } from "../Icon";

const StatusSelect = ({ id, selected, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <Wrapper id={id}>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="_"
                overlayClassName="_"
                parentSelector={() => document.getElementById(id)}
                ariaHideApp={false}
                contentElement={(props) => (
                    <ModalStyle {...props}>
                        <OptionList>
                            {options.map((opt, i) => (
                                <Option key={i}>
                                    <OptionButton
                                        onClick={() => handleChange(opt)}
                                    >
                                        {opt}
                                    </OptionButton>
                                </Option>
                            ))}
                        </OptionList>
                    </ModalStyle>
                )}
                overlayElement={(props, contentElement) => (
                    <OverlayStyle {...props}>{contentElement}</OverlayStyle>
                )}
            ></ReactModal>
            <Label aria-label="Change Status" onClick={toggleModal}>
                {selected}
                <IconWrapper>
                    <Icon icon={ICON.down} label="Show status options" />
                </IconWrapper>
            </Label>
        </Wrapper>
    );
};

const Label = styled.button`
    border: none;
    background-color: transparent;
    width: 100%;
    text-align: start;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    color: ${({ theme }) => theme.color};

    &:focus {
        outline: none;
    }
`;

const OptionButton = styled.button`
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 0px;
    text-align: start;
    border-radius: var(--r-xs);
`;

const IconWrapper = styled.div`
    width: 12px;
    height: 8px;
    flex-shrink: 0;
`;

const Wrapper = styled.div`
    position: relative;
    padding: 8px 16px;
    border: 1px solid var(--color-input-border);
    font-size: var(--size-b-l);
    line-height: var(--line-b-l);
    border-radius: var(--r-s);
    font-weight: 500;
    overflow: visible;

    &:focus-within {
        outline: var(--focus-outline);
    }
`;

const OptionList = styled.ul`
    padding: 16px;
    background-color: ${({ theme }) => theme.backgroundLight};
    border-radius: var(--r-l);

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Option = styled.li`
    font-size: var(--size-b-l);
    line-height: var(--line-b-l);
    color: var(--color-gray-300);
`;

const ModalStyle = styled.div`
    position: absolute;
    overflow: visible;
    width: 100%;
    bottom: -8px;
    transform: translateY(100%);
    border-radius: var(--r-l);

    color: black;
`;

const OverlayStyle = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: visible;
`;

export default StatusSelect;
