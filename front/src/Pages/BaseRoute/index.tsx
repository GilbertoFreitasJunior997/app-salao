import { FC } from "react";
import { Link } from "react-router-dom";
import { Main, Navbar, PageContainer } from "./styles";
import { MdPerson } from 'react-icons/md'
import BaseRouteProps from "./types";

const BaseRoute: FC<BaseRouteProps> = ({ component: Page }) => {
    return (
        <PageContainer>
            <Navbar>
                <Link className="logo" to='/'>
                    Cabeleleila Leila
                </Link>

                <div className="options">
                    <Link to='/' className="agendar-consulta" title="Agendar Consulta">
                        Agendar Consulta
                    </Link>

                    <div className="user" title="Usuário">
                        <MdPerson />
                    </div>
                </div>
            </Navbar>

            <Main>
                <Page />
            </Main>
            {/* <Footer /> */}
        </PageContainer>
    )
}

export default BaseRoute;
