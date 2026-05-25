import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {Outlet} from "react-router";

function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer/>
        </>
    )
}

export default Layout