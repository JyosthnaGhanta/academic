//DBMS.jsx
import React, { useState } from "react";

const questions = [
{
    question: "Which of the following is a relational database management system (RDBMS)?",
    options: ["a) MongoDB", "b) MySQL", "c) Cassandra", "d) Hadoop"],
    answer: 1
},
{
    question: "What is normalization in DBMS?",
    options: ["a) Minimizing redundancy", "b) Maximizing redundancy", "c) Ensuring data integrity", "d) Increasing the size of the database"],
    answer: 0
},
{
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["a) SELECT", "b) INSERT", "c) DELETE", "d) UPDATE"],
    answer: 0
},
{
    question: "What does the acronym ACID stand for in DBMS?",
    options: ["a) Atomicity, Consistency, Isolation, Durability", "b) Aggregate, Consistent, Isolated, Durable", "c) Application, Consistency, Integrity, Durability", "d) None of the above"],
    answer: 0
},
{
    question: "What is a foreign key in DBMS?",
    options: ["a) A primary key in another table", "b) A key used to retrieve data from a database", "c) A key used for indexing", "d) A type of database constraint"],
    answer: 0
},
{
    question: "Which of the following is a type of join in SQL?",
    options: ["a) INNER JOIN", "b) OUTER JOIN", "c) LEFT JOIN", "d) All of the above"],
    answer: 3
},
{
    question: "Which SQL clause is used to filter records?",
    options: ["a) WHERE", "b) SELECT", "c) HAVING", "d) ORDER BY"],
    answer: 0
},
{
    question: "Which command is used to remove all records from a table in SQL without deleting the table itself?",
    options: ["a) DELETE", "b) TRUNCATE", "c) DROP", "d) REMOVE"],
    answer: 1
},
{
    question: "Which of the following is an example of a NoSQL database?",
    options: ["a) MySQL", "b) MongoDB", "c) Oracle", "d) SQL Server"],
    answer: 1
},
{
    question: "What is the purpose of indexing in DBMS?",
    options: ["a) To speed up query processing", "b) To reduce the size of the database", "c) To ensure data integrity", "d) To encrypt data"],
    answer: 0
}
];

const DBMS = () => {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
const [submitted, setSubmitted] = useState(false);

const handleOptionSelect = (index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = index;
    setUserAnswers(updatedAnswers);
};

const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
};

const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
};

const handleSubmit = () => {
    setSubmitted(true);
};

const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
    return answer === questions[index].answer ? score + 1 : score;
    }, 0);
};

return (
    <div style={styles.container}>
    <div style={styles.whiteBackground}>
        <h1 style={{ color: 'black' }}>Quiz</h1>

        <div style={styles.questionContainer}>
        <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
        <p>{questions[currentQuestionIndex].question}</p>
        <ul style={styles.optionsList}>
            {questions[currentQuestionIndex].options.map((option, index) => (
            <li key={index} style={styles.optionItem}>
                <button
                onClick={() => handleOptionSelect(index)}
                style={{
                    ...styles.optionButton,
                    ...(userAnswers[currentQuestionIndex] === index && {
                    backgroundColor: "#A0522D",
                    color: "white",
                    }),
                }}
                disabled={submitted}
                >
                {option}
                </button>
            </li>
            ))}
        </ul>
        </div>

        <div style={styles.navigation}>
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0 || submitted} style={styles.navButton}>
            Previous
        </button>
        <div style={styles.submitButtonContainer}>
            <button onClick={handleSubmit} disabled={submitted} style={styles.submitButton}>Submit</button>
        </div>
        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1 || submitted} style={styles.navButton}>
            Next
        </button>
        </div>

        {submitted && (
        <div style={styles.score}>
            <h3>Your score: {calculateScore()} / {questions.length}</h3>
        </div>
        )}
    </div>
    </div>
);
};

const styles = {
container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    overflow: "hidden",
},
whiteBackground: {
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    width: "80%",
    maxWidth: "900px",
    maxHeight: "90vh",
    overflowY: "auto",
},
questionContainer: {
    marginBottom: "20px",
    color: "#000000",
    width: "100%",
},
optionsList: {
    listStyle: "none",
    paddingLeft: "0",
},
optionItem: {
    marginBottom: "10px",
},
optionButton: {
    fontSize: "18px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#DEB887",
    color: "#000000",
    border: "none",
    borderRadius: "50px",
    transition: "background-color 0.3s",
    width: "100%",
    textAlign: "center",
},
navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "30px",
},
navButton: {
    fontSize: "18px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#DEB887",
    color: "#000000",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
},
submitButtonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
},
submitButton: {
    fontSize: "18px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
},
score: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000000"
},
};

export default DBMS;