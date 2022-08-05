import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
    display: flex;

    svg {
        justify-content: center;

        background-color: ${p => p.theme.primary};
        border-radius: 100%;

        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.5);

        padding: 10px;
        min-width: 310px;
        max-width: 310px;
        min-height: 310px;
        max-height: 310px;
    }

    .desc {
        width: max-content;
        padding: 10px;
    }

`;