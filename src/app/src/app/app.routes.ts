import { createBrowserRouter } from "react-router";

import { Layout } from "@core";
import { Accueil, Quizz, Results } from "@features";
import { ORG_ROUTES_INDEX } from "@utils";

export const APP_ROUTES = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Accueil,
            },
            {
                path: ORG_ROUTES_INDEX.quizz.path,
                Component: Quizz,
            },
            {
                path: ORG_ROUTES_INDEX.results.path,
                Component: Results,
            },
        ],
    },
]);
