import { useState } from "react";
import styles from "./question.module.scss";

export function QuestionRow({ question }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const onAnswerClick = (id: number) => {
        if (selectedAnswer === id) {
            setSelectedAnswer(null);
        } else {
            setSelectedAnswer(id as any);
        }
    };

    const getQuestionCssClass = (id: number) => {
        let classes = "";
        if (id === selectedAnswer) {
            classes = `${styles.correctanswer}`;
        }
        return `${styles.answercontainer} ${styles.clickable} ${classes}`;
    };

    const answersContainers = [question.correct_answer, ...question.incorrect_answers].map(
        (a, i) => {
            return (
                <div key={i} className={getQuestionCssClass(i)} onClick={() => onAnswerClick(i)}>
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
