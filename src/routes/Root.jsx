import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function Root() {
    return (
        <div className="flex w-full bg-dark text-white">
            <Sidebar />
            <div id="detail" className="w-full bg-black">
                <Header />
                <div className="ottler overflow-y-auto p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}