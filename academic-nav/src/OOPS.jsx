//OOPS.jsx
import React, { useState } from "react";

const questions = [
  {
    question: "What is encapsulation in object-oriented programming?",
    options: ["a) The process of hiding implementation details", "b) The process of inheriting properties", "c) The process of creating objects", "d) The process of accessing global variables"],
    answer: 0
  },
  {
    question: "What is inheritance in Java?",
    options: ["a) The process of creating new classes from existing ones", "b) The process of hiding data", "c) The process of overriding methods", "d) The process of creating abstract methods"],
    answer: 0
  },
  {
    question: "Which of the following is used to define an abstract class in Java?",
    options: ["a) class", "b) interface", "c) abstract", "d) new"],
    answer: 2
  },
  {
    question: "What is polymorphism in Java?",
    options: ["a) The ability of a variable to hold different types", "b) The ability to inherit properties from a class", "c) The ability of a class to implement multiple interfaces", "d) The ability of an object to take on many forms"],
    answer: 3
  },
  {
    question: "Which keyword is used to prevent inheritance in Java?",
    options: ["a) final", "b) static", "c) private", "d) super"],
    answer: 0
  },
  {
    question: "What is method overloading in Java?",
    options: ["a) Same method name with different parameters", "b) Same method name with the same parameters", "c) Same method name in the parent class", "d) None of the above"],
    answer: 0
  },
  {
    question: "What is the purpose of the 'super' keyword in Java?",
    options: ["a) It refers to the parent class", "b) It is used to access private variables", "c) It is used to create an object", "d) It refers to the current object"],
    answer: 0
  },
  {
    question: "What does the 'this' keyword refer to in Java?",
    options: ["a) The current instance of the class", "b) The parent class", "c) The global class", "d) The current method"],
    answer: 0
  },
  {
    question: "What is the use of constructors in Java?",
    options: ["a) To initialize objects", "b) To inherit properties", "c) To define methods", "d) To destroy objects"],
    answer: 0
  },
  {
    question: "What is an interface in Java?",
    options: ["a) A collection of abstract methods", "b) A class that implements multiple methods", "c) A method that can be overridden", "d) A class with no properties"],
    answer: 0
  }
];

const OOPS = () => {
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

export default OOPS;