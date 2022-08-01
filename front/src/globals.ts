import { createGlobalStyle } from "styled-components";

export const theme = {
    primary: "#538083",
    secondary: "#FFCAD4",
    light: "#FFFFC7",
    dark: "#0F110C",
}

export const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
    };

    a {
        color: #0F110C;
        text-decoration: none;
    }
`;