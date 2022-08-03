import { FC } from 'react';

const MainPage: FC = () => {
    return (
        <h3>
            MAIN PAGE
            <Calendario />
        </h3>
    )
}

export default MainPage;

const Calendario: FC = () => {
    const rows: number[] = [];
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

    for (let i = 1; i <= 31; i++) {
        rows.push(i);
    }

    return (
        <div
            style={{
                width: "60vw",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gap: "5px",
            }}
        >
            {rows.map(x => {
                return (
                    <GridCell
                        key={x}
                        text={x.toString()}
                    />
                )
            })}

        </div>
    )
}

type GridCellProps = {
    text: string;
}

const GridCell: FC<GridCellProps> = ({ text }) => {
    return (
        <div
            style={{
                border: "3px solid red",
                width: "100%",
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                aspectRatio: "1 / 1",
                cursor: "pointer"
            }}>
            {text}
        </div>
    )
}
