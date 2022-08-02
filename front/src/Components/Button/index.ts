import styled from 'styled-components';

const Button = styled.button`
    padding: 6px;
    border: 4px solid ${p => p.theme.secondary};
    color: ${p => p.theme.secondary};
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 300ms ease-in-out;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);

    :hover{
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
`

export default Button;
