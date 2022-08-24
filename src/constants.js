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
        700: "237deg 100% 4%",
    },
    black: "0deg 0% 0%",
    white: "0deg 0% 100%",
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
};

export const FONT_SIZE = {
    headingXL: 24 / 18,
    headingL: 18 / 18,
    headingM: 15 / 18,
    headingS: 12 / 18,
    bodyL: 13 / 18,
    bodyM: 12 / 18,
};

export const LINE_HEIGHT = {
    headingXL: 30 / 18,
    headingL: 23 / 18,
    headingM: 19 / 18,
    headingS: 15 / 18,
    bodyL: 23 / 18,
    bodyM: 15 / 18,
};

export const BREAKPOINT = {
    phone: 480,
    tablet: 768,
    laptop: 1024,
};

export const QUERIE = {
    phoneAndUp: `(min-width: ${BREAKPOINT.phone / 18} rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINT.tablet / 18} rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINT.laptop / 18} rem)`,
};
