import styled from "styled-components";
import { QUERY } from "../../constants";
import Icon from "../Icon";

const IconButton = ({ icon, label, children }) => {
    return (
        <Wrapper>
            {icon && label && <Icon icon={icon} label={label} />}
            <Label>{children}</Label>
        </Wrapper>
    );
};

export const ResponsiveIconButton = ({ icon, label, children }) => {
    return (
        <ResponsiveWrapper>
            {icon && label && (
                <ResponsiveIconWrapper>
                    <Icon icon={icon} label={label} />
                </ResponsiveIconWrapper>
            )}
            <Label responsive aria-hidden>
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
`;

const ResponsiveWrapper = styled(Wrapper)`
    @media ${QUERY.tabletAndUp} {
        padding: 13px 24px;
    }
`;

const ResponsiveIconWrapper = styled.div`
    height: 12px;
    width: 12px;

    @media ${QUERY.tabletAndUp} {
        height: 7px;
        width: 7px;
    }
`;

const Label = styled.div`
    display: ${(props) => props.responsive && "none"};
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);

    @media ${QUERY.tabletAndUp} {
        display: initial;
    } ;
`;

export default IconButton;