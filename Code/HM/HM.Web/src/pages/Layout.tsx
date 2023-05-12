import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 h-screen ml-60 p-5 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;