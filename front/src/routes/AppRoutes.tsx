import { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
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
                        exact
                        render={() => <BaseRoute component={r.component} />}
                    />
                ))}
            </Switch>
        </HashRouter>
    )
}

export default AppRoutes;
