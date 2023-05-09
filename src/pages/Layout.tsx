import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 ml-60 bg-white">
                    <div className="h-14 bg-zinc-100 border-b shadow-sm">
                        header
                    </div>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;