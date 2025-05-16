import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { correctAnswerCount, questions$, clearQuestionsStore } from "@data";
import { QuestionWrapper } from "@shared";
import { ORG_ROUTES_INDEX } from "@utils";
import { Button } from "primereact/button";
import { map } from "rxjs";

export function Results() {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        questions$.subscribe((questions) => setQuestions(questions as any));
        questions$.pipe(map((q) => q.length > 0)).subscribe((show) => setShowQuestions(show));
    });

    const goToQuizz = () => {
        clearQuestionsStore();
        navigate(ORG_ROUTES_INDEX.quizz.path);
    };

    return (
        <div>
            <h1>
                Vous avez obtenue un score de {correctAnswerCount()}/{questions.length}
            </h1>
            {showQuestions && <QuestionWrapper questions={questions} showCorrectAnswer={true} />}
            <Button label="Retour" onClick={goToQuizz} />
        </div>
    );
}

export default Results;
