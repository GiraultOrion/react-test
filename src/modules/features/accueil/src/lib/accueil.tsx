import { NavLink } from "react-router";

import { ORG_ROUTES_INDEX } from "@utils";

import styles from "./accueil.module.scss";

export function Accueil() {
    return (
        <div className={styles["container"]}>
            <h1>Bienvenu sur mon premier site en ReactJS !</h1>
            <p>
                Ok Angular c'est surement mieux (liens dans le footer d'ailleurs), mais bon... ya
                que les cons qui, à défaut de changer d'avis, ne goute pas avant de dire que c'est
                pas bon !
            </p>
            <p>
                Donc voilà, si tu veux jouer à un petit quizz clique
                <i className="pi pi-arrow-right"></i>{" "}
                <NavLink to={ORG_ROUTES_INDEX.quizz.path} key={ORG_ROUTES_INDEX.quizz.key}>
                    ici
                </NavLink>{" "}
                <i className="pi pi-arrow-left"></i>
            </p>
            <p>
                C'est inspiré d'un projet que j'ai réaliser dans le cadre d'une certification
                Angular et que j'ai porté en ReactJS
            </p>
            <h3>Bonne chance !</h3>
        </div>
    );
}

export default Accueil;
