import { createBrowserRouter } from "react-router";
import { Accueil } from "@org/accueil";
import { Bureau } from "@org/bureau";

export const ROUTES = createBrowserRouter([
    {
        path: "/",
        Component: Accueil,
        /*         children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            {
                path: "auth",
                Component: AuthLayout,
                children: [
                    { path: "login", Component: Login },
                    { path: "register", Component: Register },
                ],
            },
            {
                path: "concerts",
                children: [
                    { index: true, Component: ConcertsHome },
                    { path: ":city", Component: ConcertsCity },
                    { path: "trending", Component: ConcertsTrending },
                ],
            },
        ], */
    },
    {
        path: "/bureau",
        Component: Bureau,
    },
]);
