import styled from "styled-components";

export const PageContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    background-color: white;
`

export const Navbar = styled.div`
    height: 80px;
    background-color: ${p => p.theme.primary};
    width: 103vw;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;

    border-radius: 0px 0px 0px 20px;

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

    .options {
        align-self: center;
        margin-left: auto;
        margin-right: 50px;

        display: flex;
        gap: 20px;

        .user{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
            border-radius: 100%;

            background-color: ${p => p.theme.secondary};
            box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;

            transition: all 300ms ease-in-out;
            cursor: pointer;

            :hover{
                transform: scale(1.1);
            }
        }
    }
`

export const Main = styled.main`
  margin: 20px;
`;

export const Footer = styled.div`
    display: flex;
    background-color: black;
    margin-top: auto;

    width: 100vw;
    height: 40px;
`
