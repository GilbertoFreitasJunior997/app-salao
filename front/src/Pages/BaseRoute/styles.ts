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
    height: 60px;
    background-color: ${p => p.theme.primary};
    width: 100vw;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;

    border-radius: 3px;
    display: flex;

    .logo {
        font-size: 2em;
        font-weight: bolder;
        margin-left: 50px;
        align-self: center;
        color: white;

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
        margin-right: 85px;

        display: flex;
        gap: 20px;

        > * {
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: bold;
            font-size: 1.2em;
            box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
            
            color: white;
            border-color: white;
            background-color: ${p => p.theme.primary};

            border-radius: 4px;
            border: 3px solid;
            cursor: pointer;

            transition: all 150ms ease-in-out;

            :hover {
                transform: scale(1.05);
                color: ${p => p.theme.primary};
                background-color: white;
            }

            :active {
                transform: scale(1.1);
            }
        }

        .agendar-consulta{
            padding: 3px;
        }

        .user{
            font-size: 2em;
            border-radius: 100%;
            width: 40px;
            height: 40px;
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
