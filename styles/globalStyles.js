import { createGlobalStyle } from "styled-components";
import { COLORS, WEIGHTS } from "../src/constants";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 100 800;
	src: url(assets/fonts/Plus-Jakarta-Sans-Variable.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html{
	// COLORS 
	--color-primary: hsl(${COLORS.primary});
    --color-primaryLight: hsl(${COLORS.primaryLight});
    --color-secondary: hsl(${COLORS.secondary});
    --color-secondaryLight: hsl(${COLORS.secondaryLight});
	--color-black: hsl(${COLORS.black});
    --color-white: hsl(${COLORS.white});
	--color-gray-100: hsl(${COLORS.gray[100]});
    --color-gray-200: hsl(${COLORS.gray[200]});
    --color-gray-300: hsl(${COLORS.gray[300]});
    --color-gray-400: hsl(${COLORS.gray[400]});
    --color-gray-500: hsl(${COLORS.gray[500]});
    --color-gray-600: hsl(${COLORS.gray[600]});
    --color-gray-700: hsl(${COLORS.gray[700]});

	// border radius
	--r-xs : 2px;
	--r-s : 4px;
	--r-m : 6px;
	--r-l : 8px;

	// typography
	--weight-bold : ${WEIGHTS.bold};
	--weight-medium : ${WEIGHTS.medium};
}


body {
    margin: 0;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	font-weight: var(--weight-bold);
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

.heading-xl {
	font-size: calc(1rem * 24/18);
	line-height: calc(1rem * 30/18);
}

.heading-l{
	font-size: calc(1rem * 18/18); 
	line-height: calc(1rem * 23/18);
}

.heading-m{
	font-size: calc(1rem * 15/18);
	line-height: calc(1rem * 19/18);
}

.heading-s{
	font-size: calc(1rem * 12/18);
	line-height: calc(1rem * 15/18);
	font-kerning: 2.4;
}

.body-l {
	font-weight: 500;
	font-size: calc(1rem * 13/18);
	line-height: calc(1rem * 23/18);
}

.body-m { 
	font-size: calc(1rem * 12/18);
	line-height: calc(1rem * 15/18);
}
`;

export default GlobalStyles;
