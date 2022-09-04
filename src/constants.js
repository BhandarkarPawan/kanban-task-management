export const COLOR = {
    primary: "242deg 48% 58%",
    primaryLight: "243deg 100% 82%",
    secondary: "0deg 78% 63%",
    secondaryLight: "0deg 100% 80%",
    gray: {
        100: "220deg 69% 97%",
        200: "221deg 69% 94%",
        300: "216deg 15% 57%",
        400: "236deg 11% 27%",
        500: "235deg 12% 19%",
        600: "235deg 16% 15%",
    },
    black: "237deg 100% 4%",
    white: "0deg 0% 100%",
    overlay: "0deg 0% 0",
};

export const WEIGHT = {
    medium: 500,
    bold: 700,
};

export const RADIUS = {
    xs: 2,
    s: 4,
    m: 6,
    l: 8,
    xl: 24,
};

export const FONT_SIZE = {
    headingXL: 24 / 16,
    headingL: 18 / 16,
    headingM: 15 / 16,
    headingS: 12 / 16,
    bodyL: 13 / 16,
    bodyM: 12 / 16,
};

export const LINE_HEIGHT = {
    headingXL: 30 / 16,
    headingL: 23 / 16,
    headingM: 19 / 16,
    headingS: 15 / 16,
    bodyL: 23 / 16,
    bodyM: 15 / 16,
};

export const BREAKPOINT = {
    phone: 480,
    tablet: 768,
    laptop: 1024,
};

export const QUERY = {
    phoneAndUp: `(min-width: ${BREAKPOINT.phone / 16}rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINT.tablet / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINT.laptop / 16}rem)`,
};
