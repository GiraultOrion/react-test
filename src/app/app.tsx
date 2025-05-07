// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { JSX } from "react";

import { Layout, ORG_ROUTES_INDEX } from "@org/core";
import { Route, Routes } from "react-router";
import { Accueil } from "@org/accueil";
import { Quizz } from "@org/quizz";

export const App: () => JSX.Element = () => {
    return (
        <div className="h-full w-full">
            <Layout>
                <Routes>
                    <Route path={ORG_ROUTES_INDEX.accueil.path} element={<Accueil />} />
                    <Route path={ORG_ROUTES_INDEX.quizz.path} element={<Quizz />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
