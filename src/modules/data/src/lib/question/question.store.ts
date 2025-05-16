import { Answer, Question } from "@models";
import { createStore, withProps } from "@ngneat/elf";

interface QuestionStore {
    questions: Array<Question>;
    answers: Array<Answer>;
}

export const questionStore = createStore(
    {
        name: "questionStore",
    },
    withProps<QuestionStore>({ questions: [], answers: [] })
);
