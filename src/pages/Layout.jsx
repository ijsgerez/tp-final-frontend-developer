import { Link, Outlet, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout-wrapper">
            
            <Header />

            {/* Contenido dinámico de las páginas */}
            <main className="main-content">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default Layout;
