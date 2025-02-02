import React, { useState } from "react";

const questions = [
  {
    question: "Which of the following points is/are not true about Linked List data structure when it is compared with an array?",
    options: [
      "a) Random access is not allowed in a typical implementation of Linked Lists",
      "b) Access of elements in linked list takes less time than compared to arrays",
      "c) Arrays have better cache locality that can make them better in terms of performance",
      "d) It is easy to insert and delete elements in Linked List"
    ],
    answer: 0
  },
  {
    question: "Which data structure is based on the Last In First Out (LIFO) principle?",
    options: ["a) Tree", "b) Linked List", "c) Stack", "d) Queue"],
    answer: 2
  },
  {
    question: "Which of the following application makes use of a circular linked list?",
    options: ["a) Recursive function calls", "b) Undo operation in a text editor", "c) Implement Hash Tables", "d) Allocating CPU to resources"],
    answer: 3
  },
  {
    question: "What is a bit array?",
    options: ["a) Data structure that compactly stores bits", "b) Data structure for representing arrays of records", "c) Array in which elements are not present in continuous locations", "d) An array in which most of the elements have the same value"],
    answer: 0
  },
  {
    question: "Which of the following tree data structures is not a balanced binary tree?",
    options: ["a) Splay tree", "b) B-tree", "c) AVL tree", "d) Red-black tree"],
    answer: 0
  },
  {
    question: "Which of the following is not the type of queue?",
    options: ["a) Priority queue", "b) Circular queue", "c) Single ended queue", "d) Ordinary queue"],
    answer: 2
  },
  {
    question: "Which of the following data structures can be used for parentheses matching?",
    options: ["a) n-ary tree", "b) queue", "c) priority queue", "d) stack"],
    answer: 3
  },
  {
    question: "Which algorithm is used in the top tree data structure?",
    options: ["a) Backtracking", "b) Divide and Conquer", "c) Branch", "d) Greedy"],
    answer: 1
  },
  {
    question: "What is the need for a circular queue?",
    options: ["a) easier computations", "b) implement LIFO principle in queues", "c) effective usage of memory", "d) to delete elements based on priority"],
    answer: 2
  },
  {
    question: "Which of the following is the most widely used external memory data structure?",
    options: ["a) B-tree", "b) Red-black tree", "c) AVL tree", "d) Both AVL tree and Red-black tree"],
    answer: 0
  }
];

const Quiz = () => {
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
}
export default Quiz;