import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { Footer, Main, Navbar, PageContainer } from "./styles";
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
                    <Button className="agendar-consulta" title="Agendar Consulta">
                        Agendar Consulta
                    </Button>
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
