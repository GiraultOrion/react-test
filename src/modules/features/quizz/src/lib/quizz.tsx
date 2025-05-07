import styles from "./quizz.module.scss";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { getTrivia } from "@org/services";
import { CodeLabel, DEFAULT_DIFFICULTIES } from "@org/utils";
import { useEffect, useState } from "react";

export function Quizz() {
    const DIFFICULTIES: Array<CodeLabel> = DEFAULT_DIFFICULTIES;
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const [trivias, setTrivias] = useState(null);
    const [selectedTrivia, setSelectedTrivia] = useState(null);

    useEffect(() => {
        let mounted = true;
        getTrivia().then((items) => {
            if (mounted) {
                console.log(items);
                setTrivias(items as any);
            }
        });
        return () => {
            mounted = false;
        };
    }, []);

    const submit = () => console.log(selectedTrivia, selectedDifficulty);

    return (
        <div className={styles["container"]}>
            <h1>Bienvenu dans mon super quizz !!</h1>
            <Dropdown
                className="w-4 mr-2"
                placeholder="Sélectionner un sujet"
                options={trivias ?? []}
                value={selectedTrivia}
                optionValue="id"
                optionLabel="name"
                onChange={(e) => setSelectedTrivia(e.value)}
            />
            <Dropdown
                className="w-2 mr-2"
                placeholder="Sélectionner une difficulté"
                options={DIFFICULTIES}
                value={selectedDifficulty}
                optionValue="code"
                optionLabel="label"
                onChange={(e) => setSelectedDifficulty(e.value)}
            />
            <Button label="Go !" onClick={submit} />
        </div>
    );
}

export default Quizz;
