import { JSX } from "react";
import { NavMenu } from "../menu/menu";
import { Footer } from "../footer/footer";

export const Layout: ({ children }) => JSX.Element = ({ children }) => {
    return (
        <div className="flex flex-column h-full w-full px-2">
            <div className="flex-none flex justify-content-center">
                <NavMenu />
            </div>
            <div className="flex-grow-1">{children}</div>
            <div className="flex-none flex">
                <Footer />
            </div>
        </div>
    );
};
