import { Question } from "@org/models";
import { API } from "@org/utils";
import axios from "axios";

export const getQuestions: (
    trivia: number,
    difficulty: string
) => Promise<Array<Question>> = async (trivia: number, difficulty: string) =>
    axios
        .get(`${API}/api.php?amount=5&type=multiple&category=${trivia}&difficulty=${difficulty}`)
        .then((r) =>
            (r.data.results as Array<Question>).map((q, i) => {
                return { ...q, id: i };
            })
        );
