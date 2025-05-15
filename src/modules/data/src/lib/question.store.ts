import { Answer, Question } from "@models";
import { createStore, select, withProps } from "@ngneat/elf";

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
};

export const addAnswer = (questionId: number, answer: string) => {
    removeAnswer(questionId);
    questionStore.update((state) => ({
        ...state,
        answers: [...state.answers, { questionId, answer }],
    }));
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
    }
};

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
