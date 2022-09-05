import { createGlobalStyle } from "styled-components";
import {
    COLOR,
    FONT_SIZE,
    LINE_HEIGHT,
    QUERY,
    RADIUS,
    WEIGHT,
} from "../constants";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url("fonts/Plus Jakarta Sans Variable.woff2") format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*:focus-visible {
        outline: var(--focus-outline);
    }

html{
	// Custom Focus 
	--focus-outline: 2px solid var(--color-secondary);

	// COLORS 
	--color-primary: hsl(${COLOR.primary});
    --color-primary-light: hsl(${COLOR.primaryLight});
    --color-secondary: hsl(${COLOR.secondary});
    --color-secondary-light: hsl(${COLOR.secondaryLight});
	--color-black: hsl(${COLOR.black});
    --color-white: hsl(${COLOR.white});
	--color-gray-100: hsl(${COLOR.gray[100]});
    --color-gray-200: hsl(${COLOR.gray[200]});
    --color-gray-300: hsl(${COLOR.gray[300]});
    --color-gray-400: hsl(${COLOR.gray[400]});
    --color-gray-500: hsl(${COLOR.gray[500]});
    --color-gray-600: hsl(${COLOR.gray[600]});
	--color-overlay: hsla(${COLOR.black} / 0.6);

	--color-placeholder-dark: hsla(${COLOR.white} / 0.25);
	--color-placeholder-light: hsla(${COLOR.black} / 0.25);
	--color-input-border: hsla(${COLOR.gray[300]} / 0.25);
	--color-themed-button-light: hsla(${COLOR.primary} / 0.1);
	--color-themed-button-hover: hsla(${COLOR.primary} / 0.25);
	--color-themed-button-dark: hsla(${COLOR.white});
	
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
	--size-h-xl: ${FONT_SIZE.headingXL}rem;
	--size-h-l : ${FONT_SIZE.headingL}rem;
	--size-h-m : ${FONT_SIZE.headingM}rem;
	--size-h-s : ${FONT_SIZE.headingS}rem;
	--size-b-l : ${FONT_SIZE.bodyL}rem;
	--size-b-m : ${FONT_SIZE.bodyM}rem;

	// line heights
	--line-h-xl:  ${LINE_HEIGHT.headingXL}rem;
	--line-h-l :  ${LINE_HEIGHT.headingL};
	--line-h-m :  ${LINE_HEIGHT.headingM}rem;
	--line-h-s :  ${LINE_HEIGHT.headingS}rem;
	--line-b-l :  ${LINE_HEIGHT.bodyL}rem;
	--line-b-m :  ${LINE_HEIGHT.bodyM}rem;

	// 
	--shadow-color-light: 219deg 24% 61%;
	--shadow-light:   
		0px 0.2px 0.2px hsl(var(--shadow-color-light) / 0.26),
		0px 0.6px 0.6px -0.5px hsl(var(--shadow-color-light) / 0.25),
		0px 1.1px 1.1px -1px hsl(var(--shadow-color-light) / 0.23),
		0px 2px 2.1px -1.6px hsl(var(--shadow-color-light) / 0.22),
		0.1px 3.6px 3.7px -2.1px hsl(var(--shadow-color-light) / 0.2),
		0.1px 6px 6.2px -2.6px hsl(var(--shadow-color-light) / 0.19),
		0.2px 9.6px 9.9px -3.1px hsl(var(--shadow-color-light) / 0.17);

	--shadow-color-dark: 236deg 26% 7%;
	--shadow-dark:  
		0px 0.2px 0.2px hsl(var(--shadow-color-dark) / 0.17),
		0px 0.8px 0.9px -0.2px hsl(var(--shadow-color-dark) / 0.17),
		0px 1.3px 1.5px -0.5px hsl(var(--shadow-color-dark) / 0.18),
		0px 1.9px 2.2px -0.7px hsl(var(--shadow-color-dark) / 0.18),
		0.1px 2.8px 3.3px -1px hsl(var(--shadow-color-dark) / 0.18),
		0.1px 3.9px 4.5px -1.2px hsl(var(--shadow-color-dark) / 0.19),
		0.1px 5.5px 6.4px -1.5px hsl(var(--shadow-color-dark) / 0.19),
		0.2px 7.6px 8.8px -1.7px hsl(var(--shadow-color-dark) / 0.2),
		0.2px 10.3px 12px -2px hsl(var(--shadow-color-dark) / 0.2),
		0.3px 13.8px 16px -2.2px hsl(var(--shadow-color-dark) / 0.2);
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

#root{
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-areas: 
		"header"
		"main";

	@media ${QUERY.tabletAndUp}{
		display: grid;
		place-items: center;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas: 
			"sidebar header"
			"sidebar main";
	}
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}
`;

export default GlobalStyles;
