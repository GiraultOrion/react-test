import { Question } from "@org/models";

export interface IQuestionRow {
    question: Question;
}

export function QuestionRow(t: IQuestionRow) {
    return <div>{t.question.question}</div>;
}
