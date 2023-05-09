import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 ml-60">
                    <div className="h-14 bg-amber-400">
                        header
                    </div>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;