import { FC, useState } from 'react';
import Calendar from '../../Components/Calendar';

const AgendamentoPage: FC = () => {
    const [mes, setMes] = useState(new Date().getMonth());

    return (
        <Calendar
            mes={mes}
            onNext={() => setMes(v => v + 1)}
            onPrevious={() => setMes(v => v - 1)}
        />
    )
}

export default AgendamentoPage;
