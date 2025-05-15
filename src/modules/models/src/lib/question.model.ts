export interface Question {
    id: number;
    category: string;
    difficulty: string;
    question: string;
    type: string;
    correctAnswer: string;
    incorrectAnswers: Array<string>;
}
