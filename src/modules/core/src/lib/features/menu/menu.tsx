import { JSX } from "react";
import { ORG_ROUTES } from "../../utils";
import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router";

export const NavMenu: () => JSX.Element = () => {
    const navLinks: Array<MenuItem> = [];
    const navigate = useNavigate();
    ORG_ROUTES.forEach((l) =>
        navLinks.push({
            label: l.label,
            icon: l.icon,
            command: () => navigate(l.path),
        })
    );
    return <TabMenu model={navLinks} />;
};
