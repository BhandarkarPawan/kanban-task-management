export const COLORS = {
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

export const WEIGHTS = {
    medium: 500,
    bold: 700,
};

export const BREAKPOINTS = {
    phone: 480,
    tablet: 768,
    laptop: 1024,
};

export const QUERIES = {
    phoneAndUp: `(min-width: ${phone / 18} rem)`,
    tabletAndUp: `(min-width: ${tablet / 18} rem)`,
    laptopAndUp: `(min-width: ${laptop / 18} rem)`,
};
