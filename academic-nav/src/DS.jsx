//DS.jsx
import React, { useState } from "react";

const questions = [
  {
    question: "Which data structure uses LIFO order?",
    options: ["a) Stack", "b) Queue", "c) Linked List", "d) Array"],
    answer: 0
  },
  {
    question: "What is a binary tree?",
    options: ["a) A tree where each node has two children", "b) A tree where each node has one child", "c) A tree with a root node only", "d) None of the above"],
    answer: 0
  },
  {
    question: "Which of the following is not a type of linked list?",
    options: ["a) Singly Linked List", "b) Doubly Linked List", "c) Circular Linked List", "d) Multi-linked List"],
    answer: 3
  },
  {
    question: "Which algorithm is used to find the shortest path in a graph?",
    options: ["a) Dijkstra's Algorithm", "b) Merge Sort", "c) Quick Sort", "d) Depth First Search"],
    answer: 0
  },
  {
    question: "What is the time complexity of accessing an element in an array?",
    options: ["a) O(n)", "b) O(log n)", "c) O(1)", "d) O(n^2)"],
    answer: 2
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    options: ["a) Array", "b) Linked List", "c) Heap", "d) Stack"],
    answer: 2
  },
  {
    question: "What does a graph represent?",
    options: ["a) A collection of vertices and edges", "b) A collection of nodes and links", "c) A set of rules for sorting data", "d) A set of nodes with no connections"],
    answer: 0
  },
  {
    question: "Which traversal method is used in a binary search tree to visit nodes in ascending order?",
    options: ["a) Inorder", "b) Preorder", "c) Postorder", "d) Level-order"],
    answer: 0
  },
  {
    question: "What is a hash table?",
    options: ["a) A structure for fast data retrieval", "b) A collection of linked lists", "c) A type of tree structure", "d) A queue for sorting data"],
    answer: 0
  },
  {
    question: "Which of the following is a self-balancing tree?",
    options: ["a) Binary Search Tree", "b) AVL Tree", "c) Red-Black Tree", "d) Both b and c"],
    answer: 3
  }
];

const DS = () => {
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

export default DS;