import styled from "styled-components";

export const PageContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    background-color: ${p => p.theme.light};
`

export const Navbar = styled.div`
    height: 80px;
    background-color: ${p => p.theme.primary};
    width: 100vw;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;

    display: flex;

    .logo {
        font-family: 'Dancing Script', sans-serif;
        font-size: 3em;
        font-weight: bolder;
        margin-left: 50px;
        align-self: center;

        transition: all 500ms ease-in-out;
        cursor: pointer;

        :hover {
            letter-spacing: 1px;
            transform: scale(1.1);
        }
    }
`

export const Footer = styled.div`

`
