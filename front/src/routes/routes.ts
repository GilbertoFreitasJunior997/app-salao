import RouteType from './types';
import MainPage from '../Pages/Main/index';
import AgendamentoPage from '../Pages/Agendamento';

const Routes: RouteType[] = [
    {
        component: MainPage,
        path: '/'
    },
    {
        component: AgendamentoPage,
        path: "agendar"
    }
]

export default Routes;