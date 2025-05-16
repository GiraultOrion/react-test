import { Outlet } from "react-router";

import { Footer } from "../footer/footer";
import { NavMenu } from "../menu/menu";

export function Layout() {
    return (
        <div className="flex flex-column h-full w-full px-2">
            <div className="flex-none flex justify-content-center">
                <NavMenu />
            </div>
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <div className="flex-none flex">
                <Footer />
            </div>
        </div>
    );
}
