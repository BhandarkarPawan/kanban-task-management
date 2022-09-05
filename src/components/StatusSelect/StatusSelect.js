import { useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import styled from "styled-components";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import Icon, { ICON } from "../Icon";
import Text, { BSIZE } from "../Text ";

const StatusSelect = ({ id, selected, options, onChange, ...delegated }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleChange = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    const optionsRef = useRef(null);
    useOutsideAlerter(optionsRef, closeModal);
    // TODO: Check the font size here, it's prolly too small
    return (
        <Wrapper id={id} {...delegated}>
            <ModalStyle>
                {isOpen && (
                    <FocusLock>
                        <OptionList ref={optionsRef}>
                            {options.map((opt, i) => (
                                <Option key={i}>
                                    <OptionButton
                                        onClick={() => handleChange(opt)}
                                    >
                                        <Text size={BSIZE.L}>{opt}</Text>
                                    </OptionButton>
                                </Option>
                            ))}
                        </OptionList>
                    </FocusLock>
                )}
            </ModalStyle>
            <Label aria-label="Change Status" onClick={openModal}>
                <Text size={BSIZE.L}>{selected}</Text>
                <IconWrapper icon={ICON.down} label="Show status options" />
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
    position: relative;
    padding: 8px 16px;
    border-radius: var(--r-s);
    border: 1px solid var(--color-input-border);

    // TODO: Switch to focus visible
    /* &:focus {
        outline: none;
    } */
`;

const OptionButton = styled.button`
    background-color: transparent;
    position: relative;
    border: none;
    width: 100%;
    padding: 0px;
    text-align: start;
    padding: 4px 16px;
    border-radius: var(--r-xs);
`;

const IconWrapper = styled(Icon)`
    width: 12px;
    height: 8px;
    flex-shrink: 0;
`;

const Wrapper = styled.div`
    position: relative;
    font-weight: 500;
    overflow: visible;

    // TODO: Switch to Focus Visible
    /* &:focus-within {
        outline: var(--focus-outline);
    } */
`;

const OptionList = styled.ul`
    background-color: ${({ theme }) => theme.backgroundLight};
    border-radius: var(--r-l);

    display: flex;
    flex-direction: column;
    padding: 8px 0px;
`;

const Option = styled.li`
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
