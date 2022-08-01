import { FC } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar, PageContainer } from "./styles";
import BaseRouteProps from "./types";

const BaseRoute: FC<BaseRouteProps> = ({ component: Page }) => {
    return (
        <PageContainer>
            <Navbar>
                <Link className="logo" to='/'>
                    Cabeleleila Leila
                </Link>
            </Navbar>

            <Page />
            <Footer />
        </PageContainer>
    )
}

export default BaseRoute;
