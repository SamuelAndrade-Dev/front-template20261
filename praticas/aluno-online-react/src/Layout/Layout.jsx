import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar"

function Layout() {
    return <>
        <aside>
            <Sidebar />
        </aside>
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout;