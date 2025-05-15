// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Accueil } from "@org/accueil";
import { Layout, ORG_ROUTES_INDEX } from "@org/core";
import { Quizz } from "@org/quizz";
import { JSX } from "react";
import { Route, Routes } from "react-router";

export const App: () => JSX.Element = () => {
    console.log("et a la racine");
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
