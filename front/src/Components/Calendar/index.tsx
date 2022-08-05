import { FC } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import CalendarioProps from "./props";
import { CalendarChangeMonthButton, CalendarContainer, CalendarContent, CalendarDayNumberCell, CalendarDayTitleCell, CalendarHeader } from "./styles";

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

    const isSameMonth = data.getMonth() === dataAtual.getMonth();

    const isDisabled = (dia: number) => {
        const diaSemanaNumero = new Date(data.getFullYear(), data.getMonth(), dia).getDay();
        return (diaSemanaNumero === 0 || diaSemanaNumero === 6) || (isSameMonth && dia < dataAtual.getDate())
    };

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarChangeMonthButton
                    onClick={onPrevious}
                    disabled={mes === 0 || (mes - 1 < dataAtual.getMonth())}
                >
                    <MdArrowLeft size={40} />
                </CalendarChangeMonthButton>
                {nomesMeses[data.getMonth()]}
                <CalendarChangeMonthButton
                    onClick={onNext}
                    disabled={mes === 11}
                >
                    <MdArrowRight size={40} />
                </CalendarChangeMonthButton>
            </CalendarHeader>
            <CalendarContent>
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
                            disabled={isDisabled(x)}
                            today={isSameMonth && x === data.getDate()}
                        />
                    )
                })}

            </CalendarContent>
        </CalendarContainer >
    )
}

export default Calendario;

type GridCellProps = {
    text: string;
}

const GridDayTitleCell: FC<GridCellProps> = ({ text }) => (
    <CalendarDayTitleCell>
        {text}
    </CalendarDayTitleCell>
)


type GridDayNumberCellProps = GridCellProps & {
    disabled: boolean;
    today: boolean;
}

const GridDayNumberCell: FC<GridDayNumberCellProps> = ({ text, disabled, today }) => {
    return (
        <CalendarDayNumberCell
            disabled={disabled}
            today={today}
        >
            <span>
                {text}
            </span>
        </CalendarDayNumberCell>
    )
}
