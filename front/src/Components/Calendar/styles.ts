import styled from 'styled-components';

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    place-content: center;

    background-color: ${p => p.theme.primary};

    padding: 15px;
    border-radius: 10px;
    margin: 0 auto;
    color: white;

    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
`

export const CalendarHeader = styled.div`
    display: flex;

    justify-content: space-between;
    line-height: 50px;
    height: 50px;

    font-size: 1.4em;
    font-weight: bold;
    
    user-select: none;
`;

export const CalendarChangeMonthButton = styled.button`
    border: none;
    background-color: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin: 0 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);

    transition: all 150ms ease-in-out;
    :disabled {
        cursor: not-allowed;
        opacity: 0.95;
    }
`;

export const CalendarContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 5px;
    place-self: center;
`;

export const CalendarDayTitleCell = styled.div`
    width: 100%;
    display: flex;
    place-items: center;
    place-content: center;
    height: 50px;
    user-select: none;
    padding: 4px;
`;

export const CalendarDayNumberCell = styled.div<{
    disabled: boolean;
    today: boolean;
}>`
    width: 100%;
    display: flex;
    place-items: center;
    place-content: center;

    cursor: ${p => p.disabled ? "default" : "pointer"};
    
    > span {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        color: ${p => p.today ? p.theme.primary : p.disabled ? "darkgray" : "white"};
        background-color: ${p => p.today ? "white" : "transparent"};
        
        ${p => p.today && `box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);`};

        transition: all 100ms ease-in-out;
        transition: background-color 0ms ease-in-out;
        user-select: none;

        :hover {
            font-size: ${p => p.disabled ? '1em' : '1.1em'};
        }
    }
`;
