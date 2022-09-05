import styled from "styled-components";
import { QUERY } from "../../constants";
import Heading, { HSIZE } from "../Heading";
import Icon from "../Icon";

const IconButton = ({ icon, label, children, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            {icon && label && <Icon icon={icon} label={label} />}
            <Label>{children}</Label>
        </Wrapper>
    );
};

export const ResponsiveIconButton = ({
    icon,
    label,
    children,
    ...delegated
}) => {
    return (
        <ResponsiveWrapper {...delegated}>
            {icon && label && (
                <ResponsiveIconWrapper icon={icon} label={label} />
            )}
            <Label size={HSIZE.M} responsive aria-hidden>
                {children}
            </Label>
        </ResponsiveWrapper>
    );
};

const Wrapper = styled.button`
    background-color: var(--color-primary);
    color: white;
    padding: 10px 18px;
    border: none;
    border-radius: 5000px;
    display: flex;
    align-items: baseline;
    gap: 4px;

    &:hover {
        background-color: var(--color-primary-light);
        cursor: pointer;
    }
`;

const ResponsiveWrapper = styled(Wrapper)`
    @media ${QUERY.tabletAndUp} {
        padding: 13px 24px;
    }
`;

const ResponsiveIconWrapper = styled(Icon)`
    height: 12px;
    width: 12px;

    @media ${QUERY.tabletAndUp} {
        height: 7px;
        width: 7px;
    }
`;

const Label = styled(Heading)`
    display: ${(props) => props.responsive && "none"};

    @media ${QUERY.tabletAndUp} {
        display: initial;
    } ;
`;

export default IconButton;
