import { Question } from "@org/models";
import { QuestionRow } from "../question/question";

export function QuestionWrapper({ questions, highlightCorrectAnswer }) {
    const qList = questions.map((q: Question, i: number) => {
        return (
            <QuestionRow key={q.id} question={q} highlightCorrectAnswer={highlightCorrectAnswer} />
        );
    });
    return qList;
}
