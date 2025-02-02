import React, { useState } from "react";

const TextSummarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setError("");
    setSummary("");
    setIsLoading(true);

    try {
      let response;

      if (inputText.match(/^https?:\/\//)) {
        response = await fetch("http://127.0.0.1:3000/summarize-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: inputText }),
        });
      } else if (inputText.trim()) {
        response = await fetch("http://127.0.0.1:3000/summarize-text", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: inputText }),
        });
      } else {
        setError("Please enter text or paste a URL.");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Summarization failed");
      }

      setSummary(data.summary);
    } catch (err) {
      setError(err.message || "Summarization failed. Please try again.");
      console.error("Summarization Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-summarizer-container">
      <h2 className="text-2xl font-bold mb-4">Text Summarizer</h2>
      
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
        className="textarea"
      />

      <button
        onClick={handleSummarize}
        disabled={isLoading}
        className="summarize-button"
      >
        {isLoading ? "Summarizing..." : "Summarize"}
      </button>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {summary && (
        <div className="summary-container">
          <h3 className="summary-title">Summary</h3>
          <p className="summary-text">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default TextSummarizer;

/* CSS */
<style jsx>{`
  .text-summarizer-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .textarea {
    width: 200%;
    min-height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    resize: vertical;
    font-size: 16px;
  }

  .summarize-button {
    width: 100%;
    padding: 14px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .summarize-button:hover {
    background-color: #45a049;
  }

  .summarize-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .error-message {
    margin-top: 20px;
    padding: 12px;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    color: #721c24;
  }

  .summary-container {
    margin-top: 20px;
    padding: 12px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .summary-title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .summary-text {
    font-size: 14px;
    color: #555;
  }
`}</style>
