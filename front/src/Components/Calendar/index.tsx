import { FC } from "react";
import CalendarioProps from "./props";

const Calendario: FC<CalendarioProps> = ({ mes, onNext, onPrevious }) => {
    const dataAtual = new Date();
    const data = new Date();
    data.setMonth(mes);

    const ultimoDiaMesAtual = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
    const ultimoDiaMesPassado = new Date(data.getFullYear(), data.getMonth(), 0).getDay();

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
            <button
                onClick={onNext}
                disabled={mes === 11}
            >
                Proximo
            </button>
            <button
                onClick={onPrevious}
                disabled={mes === 0 || (mes - 1 < dataAtual.getMonth())}
            >
                Anterior
            </button>
            <div
                style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    placeContent: "center"
                }}
            >
                <h3 style={{ placeSelf: "center" }}>
                    {nomesMeses[data.getMonth()]}
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
                            disabled={data.getMonth() === dataAtual.getMonth() && x < dataAtual.getDate()}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Calendario;

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

type GridDayNumberCellProps = GridCellProps & {
    disabled: boolean;
}

const GridDayNumberCell: FC<GridDayNumberCellProps> = ({ text, disabled }) => {
    return (
        <div
            style={{
                border: "3px solid red",
                width: "100%",
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                aspectRatio: "1 / 1",
                cursor: disabled ? "default" : "pointer",
                backgroundColor: disabled ? "lightgray" : "transparent"
            }}>
            {text}
        </div>
    )
}
