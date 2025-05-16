/* eslint-disable */
/* tslint-disable */
import { API } from "@config";
import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";

export const getQuestions: (trivia: number, difficulty: string) => Observable<AxiosResponse> = (
    trivia: number,
    difficulty: string
) =>
    from(
        axios.get(
            `${API}/api.php?amount=5&type=multiple&category=${trivia}&difficulty=${difficulty}`
        )
    );
