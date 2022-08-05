import { createGlobalStyle } from "styled-components";

export const theme = {
    primary: "#00A8EA",
    secondary: "#C2CAD0",
    light: "#FFFFC7",
    dark: "#0F110C",
}

export const globalStyle = createGlobalStyle`
    body {
        overflow-x: hidden;
        background-color: #C2CAD0;
    };

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