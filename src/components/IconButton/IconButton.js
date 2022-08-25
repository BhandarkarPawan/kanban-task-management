import styled from "styled-components";
import { QUERY } from "../../constants";
import Icon from "../Icon";

const IconButton = ({ icon, label, height, width, children }) => {
    if (!icon || !label) {
        console.warn("Both the icon and the label must be specified");
    }

    return (
        <Wrapper>
            {icon && label && (
                <Icon height={height} width={width} icon={icon} label={label} />
            )}
            <Label>{children}</Label>
        </Wrapper>
    );
};

export const ResponsiveIconButton = ({
    icon,
    label,
    height,
    width,
    children,
}) => {
    return (
        <ResponsiveWrapper>
            {icon && label && (
                <Icon height={height} width={width} icon={icon} label={label} />
            )}
            <Label responsive>{children}</Label>
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

const Label = styled.div`
    display: ${(props) => props.responsive && "none"};
    font-size: var(--size-h-m);

    @media ${QUERY.tabletAndUp} {
        display: initial;
    } ;
`;

export default IconButton;
