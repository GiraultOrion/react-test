import { Question } from "@models";

import { QuestionRow } from "../question/question";

interface QuestionWrapperInputs {
    questions: Array<Question>;
    showCorrectAnswer: boolean;
}

export function QuestionWrapper({ questions, showCorrectAnswer }: QuestionWrapperInputs) {
    const qList = questions.map((q: Question, i: number) => {
        return <QuestionRow key={q.id} question={q} showCorrectAnswer={showCorrectAnswer} />;
    });
    return qList;
}
