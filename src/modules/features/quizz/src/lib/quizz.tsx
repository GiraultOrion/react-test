import styles from "./quizz.module.scss";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { getQuestions, getTrivia } from "@org/services";
import { CodeLabel, DEFAULT_DIFFICULTIES } from "@org/utils";
import { QuestionWrapper } from "@org/shared";
import { useEffect, useState } from "react";
import { addOrUpdateQuestions, questions$ } from "@org/data";
import { map } from "rxjs";

export function Quizz() {
    const DIFFICULTIES: Array<CodeLabel> = DEFAULT_DIFFICULTIES;
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const [trivias, setTrivias] = useState(null);
    const [selectedTrivia, setSelectedTrivia] = useState(null);

    const [questions, setQuestions] = useState(null);

    const [pending, setPending] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

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

    useEffect(() => {
        questions$.subscribe((questions) => setQuestions(questions as any));
        questions$.pipe(map((q) => q.length > 0)).subscribe((show) => setShowQuestions(show));
    });

    const submit = () => {
        setPending(true);
        addOrUpdateQuestions([]);
        getQuestions(selectedTrivia ?? 0, selectedDifficulty ?? "").then((items) => {
            addOrUpdateQuestions(items);
            setPending(false);
        });
    };

    return (
        <div className={styles["container"]}>
            <h1>Le Quizz</h1>
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
            {showQuestions && (
                <QuestionWrapper questions={questions} highlightCorrectAnswer={false} />
            )}
            {showQuestions && <Button label="Valider" />}
        </div>
    );
}

export default Quizz;
