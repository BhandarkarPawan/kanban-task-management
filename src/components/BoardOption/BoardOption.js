import styled from "styled-components";
import { QUERY } from "../../constants";
import Icon, { ICON } from "../Icon";

const BoardOption = ({
    id,
    name,
    value,
    checked,
    children,
    setSelectedBoard,
}) => {
    return (
        <Wrapper>
            <Input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={() => setSelectedBoard(value)}
            />
            <LabelWrapper htmlFor={id}>
                <IconWrapper>
                    <Icon label={name} icon={ICON.board} />
                </IconWrapper>
                {children}
            </LabelWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-right: 24px;

    @media ${QUERY.tabletAndUp} {
        margin-right: 20px;
    }

    @media ${QUERY.laptopAndUp} {
        margin-right: 24px;
    }
`;

const Input = styled.input`
    position: fixed;
    opacity: 0;
    pointer-events: none;
`;

const IconWrapper = styled.div`
    height: 16px;
    width: 16px;

    ${Input}:checked + Label & {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
            hue-rotate(103deg) brightness(105%) contrast(105%);
    }
`;

const LabelWrapper = styled.label`
    display: flex;
    align-items: center;
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
    gap: 12px;
    padding: 14px 0px 15px 24px;
    color: var(--color-gray-300);
    border-radius: 0px 5000px 5000px 0px;

    @media ${QUERY.laptopAndUp} {
        padding-left: 32px;
    }

    ${Input}:checked + & {
        color: var(--color-white);
        background-color: var(--color-primary);
    }

    ${Input}:focus-visible + & {
        outline: var(--focus-outline);
    }
`;

export default BoardOption;