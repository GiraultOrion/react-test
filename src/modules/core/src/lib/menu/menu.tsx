import { JSX } from "react";
import { useLocation, useNavigate } from "react-router";

import { ORG_ROUTES } from "@utils";
import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";

export const NavMenu: () => JSX.Element = () => {
    const navLinks: Array<MenuItem> = [];
    const navigate = useNavigate();
    const location = useLocation();

    let activeIndex = ORG_ROUTES.findIndex((r) => r.path === location.pathname);
    const setActiveIndex = (index: number) => (activeIndex = index);

    ORG_ROUTES.filter((l) => !l.hide).forEach((l) =>
        navLinks.push({
            label: l.label,
            icon: l.icon,
            command: () => navigate(l.path),
        })
    );

    return (
        <TabMenu
            model={navLinks}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
        />
    );
};
