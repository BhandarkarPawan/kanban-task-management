import { createGlobalStyle } from "styled-components";
import { COLOR, FONT_SIZE, LINE_HEIGHT, RADIUS, WEIGHT } from "../constants";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url("fonts/Plus Jakarta Sans Variable.woff2") format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html{
	// COLORS 
	--color-primary: hsl(${COLOR.primary});
    --color-primaryLight: hsl(${COLOR.primaryLight});
    --color-secondary: hsl(${COLOR.secondary});
    --color-secondaryLight: hsl(${COLOR.secondaryLight});
	--color-black: hsl(${COLOR.black});
    --color-white: hsl(${COLOR.white});
	--color-gray-100: hsl(${COLOR.gray[100]});
    --color-gray-200: hsl(${COLOR.gray[200]});
    --color-gray-300: hsl(${COLOR.gray[300]});
    --color-gray-400: hsl(${COLOR.gray[400]});
    --color-gray-500: hsl(${COLOR.gray[500]});
    --color-gray-600: hsl(${COLOR.gray[600]});

	// border radius
	--r-xs : ${RADIUS.xs}px;
	--r-s : ${RADIUS.s}px;
	--r-m : ${RADIUS.m}px;
	--r-l : ${RADIUS.l}px;
	--r-xl : ${RADIUS.xl}px;

	// font weights 
	--weight-bold : ${WEIGHT.bold};
	--weight-medium : ${WEIGHT.medium};

	// font sizes 
	--size-h-xl: ${FONT_SIZE.headingXL}
	--size-h-l : ${FONT_SIZE.headingL}
	--size-h-m : ${FONT_SIZE.headingM}
	--size-h-s : ${FONT_SIZE.headingS}
	--size-b-l : ${FONT_SIZE.bodyL}
	--size-b-m : ${FONT_SIZE.bodyM}

	// line heights
	--line-h-xl:  ${LINE_HEIGHT.headingXL}rem;
	--line-h-l :  ${LINE_HEIGHT.headingL} 
	--line-h-m :  ${LINE_HEIGHT.headingM}rem;
	--line-h-s :  ${LINE_HEIGHT.headingS}rem;
	--line-b-l :  ${LINE_HEIGHT.bodyL}rem;
	--line-b-m :  ${LINE_HEIGHT.bodyM}rem;
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
`;

export default GlobalStyles;