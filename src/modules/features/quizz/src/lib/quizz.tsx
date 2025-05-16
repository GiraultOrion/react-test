import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { addOrUpdateQuestions, questions$ } from "@data";
import { getQuestions, getTrivia } from "@services";
import { QuestionWrapper } from "@shared";
import { CodeLabel, DEFAULT_DIFFICULTIES } from "@utils";
import { ORG_ROUTES_INDEX } from "@utils";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { map } from "rxjs";

import styles from "./quizz.module.scss";

export function Quizz() {
    const navigate = useNavigate();

    const DIFFICULTIES: Array<CodeLabel> = DEFAULT_DIFFICULTIES;
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const [trivias, setTrivias] = useState(null);
    const [selectedTrivia, setSelectedTrivia] = useState(null);

    const [questions, setQuestions] = useState(null);
    const [showQuestions, setShowQuestions] = useState(false);

    const [pending, setPending] = useState(false);

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
            {showQuestions && <QuestionWrapper questions={questions} showCorrectAnswer={false} />}
            {showQuestions && (
                <Button label="Valider" onClick={() => navigate(ORG_ROUTES_INDEX.results.path)} />
            )}
        </div>
    );
}

export default Quizz;
