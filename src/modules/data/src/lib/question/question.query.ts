import { select } from "@ngneat/elf";

import { questionStore } from "./question.store";

export const getAnswer = (questionId: number) => {
    return questionStore.getValue().answers.find((q) => q.questionId === questionId);
};

export const correctAnswerCount = () => {
    const questions = questionStore.getValue().questions;
    const answers = questionStore.getValue().answers;
    return answers.filter((a) => {
        const question = questions.find((q) => q.id === a.questionId);
        return a.answer === question?.correctAnswer;
    }).length;
};

export const clearQuestionsStore = () =>
    questionStore.update((state) => ({ ...state, answers: [], questions: [] }));
export const answers$ = questionStore.pipe(select((state) => state.answers));
export const questions$ = questionStore.pipe(select((state) => state.questions));
