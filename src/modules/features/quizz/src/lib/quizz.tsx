import styles from "./quizz.module.scss";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { getQuestions, getTrivia } from "@org/services";
import { CodeLabel, DEFAULT_DIFFICULTIES } from "@org/utils";
import { QuestionRow, QuestionWrapper } from "@org/shared";
import { ReactElement, useEffect, useState } from "react";

export function Quizz() {
    const DIFFICULTIES: Array<CodeLabel> = DEFAULT_DIFFICULTIES;
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const [trivias, setTrivias] = useState(null);
    const [selectedTrivia, setSelectedTrivia] = useState(null);

    const [questions, setQuestions] = useState(null);

    const [pending, setPending] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    const qList: Array<ReactElement> = [];

    useEffect(() => {
        let mounted = true;
        getTrivia().then((items) => {
            if (mounted) {
                setTrivias(items as any);
            }
        });
        return () => {
            mounted = false;
        };
    }, []);

    const submit = () => {
        setPending(true);
        setShowQuestions(false);
        getQuestions(selectedTrivia ?? 0, selectedDifficulty ?? "").then((items) => {
            setQuestions(items as any);
            (items ?? []).forEach((i) => qList.push(<QuestionRow question={i} />));
            setPending(false);
            setShowQuestions(true);
        });
    };

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
            <Button
                label="Go !"
                onClick={submit}
                disabled={selectedDifficulty === null || selectedTrivia === null || pending}
            />
            {showQuestions && <QuestionWrapper questions={questions} />}
        </div>
    );
}

export default Quizz;
