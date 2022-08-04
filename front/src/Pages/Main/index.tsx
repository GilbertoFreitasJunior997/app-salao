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
    const date = new Date();

    const ultimoDiaMesAtual = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const ultimoDiaMesPassado = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

    const diasAnteriores: number[] = [];
    const numerosDias: number[] = [];

    const nomesDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    for (let x = 0; x < ultimoDiaMesPassado + 1; x++) {
        diasAnteriores.push(x);
    }

    for (let i = 1; i <= ultimoDiaMesAtual; i++) {
        numerosDias.push(i);
    }

    return (
        <div
            style={{ display: "flex", flexDirection: "column", minWidth: "100vw", placeContent: "center" }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    placeContent: "center"
                }}
            >
                <h3 style={{ placeSelf: "center" }}>
                    {nomesMeses[date.getMonth()]}
                </h3>
            </div>


            <div
                style={{
                    width: "fit-content",
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "5px",
                    placeSelf: "center",
                }}
            >
                {nomesDias.map(x => {
                    return (
                        <GridDayTitleCell
                            key={x}
                            text={x.toString()}
                        />
                    )
                })}

                {diasAnteriores.map(x => {
                    return (<div key={x}></div>)
                })}

                {numerosDias.map(x => {
                    return (
                        <GridDayNumberCell
                            key={x}
                            text={x.toString()}
                        />
                    )
                })}

            </div>
        </div>
    )
}

type GridCellProps = {
    text: string;
}

const GridDayTitleCell: FC<GridCellProps> = ({ text }) => {
    return (
        <div
            style={{
                border: "3px solid red",
                width: "100%",
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                height: "50px",
                cursor: "pointer"
            }}>
            {text}
        </div>
    )
}

const GridDayNumberCell: FC<GridCellProps> = ({ text }) => {
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
