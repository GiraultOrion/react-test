export interface OrgRoute {
    path: string;
    label: string;
    key: string;
    icon?: string;
    hide?: boolean;
}

export abstract class ORG_ROUTES_INDEX {
    public static readonly accueil: OrgRoute = {
        path: "/",
        label: "Accueil",
        key: "accueil",
        icon: "pi pi-home",
    };

    public static readonly quizz: OrgRoute = {
        path: "/quizz",
        label: "Quizz",
        key: "quizz",
        icon: "pi pi-question",
    };

    public static readonly results: OrgRoute = {
        path: "/results",
        label: "Results",
        key: "results",
        icon: "pi pi-question",
        hide: true,
    };
}

export const ORG_ROUTES: Array<OrgRoute> = [
    ORG_ROUTES_INDEX.accueil,
    ORG_ROUTES_INDEX.quizz,
    ORG_ROUTES_INDEX.results,
];
