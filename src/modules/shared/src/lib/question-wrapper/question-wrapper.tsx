import { Question } from "@models";

import { QuestionRow } from "../question/question";

export function QuestionWrapper({ questions, showCorrectAnswer }) {
    const qList = questions.map((q: Question, i: number) => {
        return <QuestionRow key={q.id} question={q} showCorrectAnswer={showCorrectAnswer} />;
    });
    return qList;
}
