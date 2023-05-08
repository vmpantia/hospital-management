import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div>
            <section className='main-header'>
            </section>
            <section className='main-content'>
                <Sidebar />
                <div className="main-page">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}

export default Layout;