export const lightTheme = {
    background: `var(--color-gray-100)`,
    backgroundLight: `var(--color-white)`,
    backgroundDark: `linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);`,
    color: `var(--color-black)`,
    logo: `assets/logo-dark.svg`,
    shadow: `var(--shadow-light)`,
};

export const darkTheme = {
    background: `var(--color-gray-600)`,
    backgroundLight: `var(--color-gray-500)`,
    backgroundDark: `linear-gradient(
        180deg,
        rgba(43, 44, 55, 0.25) 0%,
        rgba(43, 44, 55, 0.125) 100%
    )`,
    color: `var(--color-white)`,
    logo: `assets/logo-light.svg`,
    shadow: `var(--shadow-dark)`,
};
