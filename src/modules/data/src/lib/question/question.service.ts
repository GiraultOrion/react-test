import { Question } from "@models";
import { getQuestions } from "@services";
import { map, tap } from "rxjs";

import { questionStore } from "./question.store";

export const fetchQuestions = (trivia: number, difficulty: string) => {
    addOrUpdateQuestions([]);
    return getQuestions(trivia, difficulty).pipe(
        map((r) =>
            (r.data.results as Array<any>).map((q, i) => {
                return {
                    id: i,
                    category: q.category,
                    correctAnswer: q.correct_answer,
                    difficulty: q.difficulty,
                    incorrectAnswers: q.incorrect_answers as Array<string>,
                    question: q.question,
                    type: q.type,
                } as Question;
            })
        ),
        tap((q) => addOrUpdateQuestions(q))
    );
};

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
