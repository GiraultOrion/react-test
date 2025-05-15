import { Question } from "@org/models";
import { QuestionRow } from "../question/question";

export function QuestionWrapper({ questions }) {
    const qList = questions.map((q: Question, i: number) => {
        return <QuestionRow key={i} question={q} />;
    });
    return qList;
}
