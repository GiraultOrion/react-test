import { OrgRoute } from "../models";

export abstract class ORG_ROUTES_INDEX {
    public static readonly accueil: OrgRoute = {
        path: "/",
        label: "Accueil",
        key: "accueil",
        icon: "pi pi-home",
    };

    public static readonly bureau: OrgRoute = {
        path: "/bureau",
        label: "Bureau",
        key: "bureau",
        icon: "pi pi-building",
    };
}

export const ORG_ROUTES: Array<OrgRoute> = [ORG_ROUTES_INDEX.accueil, ORG_ROUTES_INDEX.bureau];
