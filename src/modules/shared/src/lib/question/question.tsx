import { useState } from "react";

import { addAnswer, getAnswer, removeAnswer } from "@data";
import { Question } from "@models";

import styles from "./question.module.scss";

interface QuestionRowInputs {
    question: Question;
    showCorrectAnswer: boolean;
}

export function QuestionRow({ question, showCorrectAnswer }: QuestionRowInputs) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const onAnswerClick = (answer: string) => {
        if (!showCorrectAnswer) {
            if (selectedAnswer === answer) {
                setSelectedAnswer(null);
                removeAnswer(question.id);
            } else {
                setSelectedAnswer(answer as any);
                addAnswer(question.id, answer);
            }
        }
    };

    const getAnswerCssClass = (answer: string) => {
        let classes = `${styles.answercontainer} `;
        if (!showCorrectAnswer) {
            classes += `${styles.clickable} `;
        }

        if (showCorrectAnswer && answer === question.correctAnswer) {
            classes += `${styles.correctanswer}`;
        } else if (
            showCorrectAnswer &&
            answer !== question.correctAnswer &&
            answer === getAnswer(question.id)?.answer
        ) {
            classes += `${styles.wronganswer}`;
        } else if (answer === getAnswer(question.id)?.answer) {
            classes += `${styles.correctanswer}`;
        }
        return `${classes}`;
    };

    const answersContainers = [question.correctAnswer, ...question.incorrectAnswers].map((a, i) => {
        return (
            <div key={i} className={getAnswerCssClass(a)} onClick={() => onAnswerClick(a)}>
                {a}
            </div>
        );
    });

    return (
        <div className={styles.questioncontainer}>
            <div className={styles.questionheader}>{question.question}</div>
            <div>
                <div className={styles.answerslistcontainer}>{answersContainers}</div>
            </div>
        </div>
    );
}
