import { useCallback, useEffect, useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import styled from "styled-components";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import Icon, { ICON } from "../Icon";
import Text, { BSIZE } from "../Text ";

const Menu = ({ label, options, ...delegated }) => {
    // eslint-disable-next-line no-undef
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Hide the menu when esc is pressed
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const optionsRef = useRef(null);
    useOutsideAlerter(optionsRef, toggleMenu);

    return (
        <Wrapper>
            <MenuButton onClick={toggleMenu}>
                <IconWrapper icon={ICON.menu} label={label} />
            </MenuButton>
            {isOpen && (
                <FocusLock>
                    <OptionList {...delegated} ref={optionsRef}>
                        {options.map((opt, i) => (
                            <Option
                                key={i}
                                danger={opt.danger}
                                onClick={opt.cb}
                            >
                                <Text size={BSIZE.L}>{opt.label}</Text>
                            </Option>
                        ))}
                    </OptionList>
                </FocusLock>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    flex-shrink: 0;
`;

const MenuButton = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;

    // Increase button tap area
    --tap-size: 24px;
    margin: calc(-1 * var(--tap-size));
    padding: var(--tap-size);
    cursor: pointer;
    border-radius: var(--r-l);
`;

const IconWrapper = styled(Icon)`
    height: 20px;
    width: auto;
`;

const OptionList = styled.ul`
    position: absolute;
    right: -16px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundLight};
    width: 192px;
    border-radius: var(--r-l);
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 8px 0;
`;

const Option = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    text-align: left;
    border-radius: var(--r-s);
    padding: 8px 16px;
    cursor: pointer;

    font-weight: 500;
    color: ${(props) =>
        props.danger ? "var(--color-secondary)" : "var(--color-gray-300)"};
`;

export default Menu;
