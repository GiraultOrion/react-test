import { Question } from "@models";
import { API } from "@config";
import axios from "axios";

export const getQuestions: (
    trivia: number,
    difficulty: string
) => Promise<Array<Question>> = async (trivia: number, difficulty: string) =>
    axios
        .get(`${API}/api.php?amount=5&type=multiple&category=${trivia}&difficulty=${difficulty}`)
        .then((r) =>
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
        );
