import { useState } from "react";
import styles from "./question.module.scss";

import { addAnswer, removeAnswer } from "@org/data";

export function QuestionRow({ question, highlightCorrectAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const onAnswerClick = (answer: string) => {
        if (selectedAnswer === answer) {
            setSelectedAnswer(null);
            removeAnswer(question.id);
        } else {
            setSelectedAnswer(answer as any);
            addAnswer(question.id, answer);
        }
    };

    const getAnswerCssClass = (answer: string) => {
        let classes = "";
        if (answer === selectedAnswer) {
            classes = `${styles.correctanswer}`;
        }
        return `${styles.answercontainer} ${styles.clickable} ${classes}`;
    };

    const answersContainers = [question.correct_answer, ...question.incorrect_answers].map(
        (a, i) => {
            return (
                <div key={i} className={getAnswerCssClass(a)} onClick={() => onAnswerClick(a)}>
                    {a}
                </div>
            );
        }
    );

    return (
        <div className={styles.questioncontainer}>
            <div className={styles.questionheader}>{question.question}</div>
            <div>
                <div className={styles.answerslistcontainer}>{answersContainers}</div>
            </div>
        </div>
    );
}
