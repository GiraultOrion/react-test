export interface Question {
    category: string;
    difficulty: string;
    question: string;
    type: string;
    correctAnswer: string;
    incorrectAnswers: Array<string>;
}
