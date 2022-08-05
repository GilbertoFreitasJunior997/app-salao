import { FC } from "react";
import { Route, Routes as Switch, HashRouter } from 'react-router-dom';
import BaseRoute from "../Pages/BaseRoute";
import Routes from "./routes";

const AppRoutes: FC = () => {
    return (
        <HashRouter>
            <Switch>
                {Routes.map(r => (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={<BaseRoute component={r.component} />}
                    />
                ))}
            </Switch>
        </HashRouter>
    )
}

export default AppRoutes;
