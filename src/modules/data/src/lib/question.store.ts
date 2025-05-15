import { createStore, select, withProps } from "@ngneat/elf";

import { Answer, Question } from "@org/models";

interface QuestionStore {
    questions: Array<Question>;
    answers: Array<Answer>;
}

const questionStore = createStore(
    {
        name: "questionStore",
    },
    withProps<QuestionStore>({ questions: [], answers: [] })
);

export const addOrUpdateQuestions = (questions: Array<Question>) => {
    questionStore.update((state) => ({
        ...state,
        questions,
    }));
    console.log(questionStore.getValue());
};

export const addAnswer = (questionId: number, answer: string) => {
    removeAnswer(questionId);
    questionStore.update((state) => ({
        ...state,
        answers: [...state.answers, { questionId, answer }],
    }));
    console.log(questionStore.getValue());
};

export const removeAnswer = (questionId: number) => {
    const answers = questionStore.getValue().answers;
    const aIndex = answers.findIndex((q) => q.questionId === questionId);
    if (aIndex > -1) {
        answers.splice(aIndex, 1);
        questionStore.update((state) => ({
            ...state,
            answers,
        }));
        console.log(questionStore.getValue());
    }
};

export const getAnswer = (questionId: number) => {
    console.log(questionStore.getValue());
    return questionStore.getValue().answers.find((q) => q.questionId === questionId);
};

export const answers$ = questionStore.pipe(select((state) => state.answers));
export const questions$ = questionStore.pipe(select((state) => state.questions));
