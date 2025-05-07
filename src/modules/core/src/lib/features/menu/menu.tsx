import { JSX } from "react";
import { ORG_ROUTES } from "../../utils";
import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { useLocation, useNavigate } from "react-router";

export const NavMenu: () => JSX.Element = () => {
    const navLinks: Array<MenuItem> = [];
    const navigate = useNavigate();
    const location = useLocation();

    let activeIndex = ORG_ROUTES.findIndex((r) => r.path === location.pathname);
    const setActiveIndex = (index: number) => (activeIndex = index);

    ORG_ROUTES.forEach((l) =>
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
