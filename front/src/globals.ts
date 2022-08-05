import { createGlobalStyle } from "styled-components";

export const theme = {
    primary: "#E7717D",
    secondary: "#C2CAD0",
    light: "#FFFFC7",
    dark: "#0F110C",
}

export const globalStyle = createGlobalStyle`
    body {
        overflow-x: hidden;
    }

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