import { FC, useState } from 'react';
import Calendario from '../../Components/Calendar';

const MainPage: FC = () => {
    const [mes, setMes] = useState<number>(new Date().getMonth());

    return (
        <h3>
            MAIN PAGE
            <Calendario
                mes={mes}
                onNext={() => setMes(v => v + 1)}
                onPrevious={() => setMes(v => v - 1)}
            />
        </h3>
    )
}

export default MainPage;
