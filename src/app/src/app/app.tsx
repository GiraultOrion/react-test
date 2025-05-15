// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { JSX } from "react";
import { Route, Routes } from "react-router";

import { Accueil } from "@accueil";
import { Layout } from "@core";
import { Quizz } from "@quizz";
import { Results } from "@results";
import { ORG_ROUTES_INDEX } from "@utils";

export const App: () => JSX.Element = () => {
    return (
        <div className="h-full w-full">
            <Layout>
                <Routes>
                    <Route path={ORG_ROUTES_INDEX.accueil.path} element={<Accueil />} />
                    <Route path={ORG_ROUTES_INDEX.quizz.path} element={<Quizz />} />
                    <Route path={ORG_ROUTES_INDEX.results.path} element={<Results />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
