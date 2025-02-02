import React from "react";

const lectures = [
  {
    branch: "AI & ML",
    links: [
        { title: "Python", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
        { title: "Learning Analytics", url: "https://solaresearch.org/wp-content/uploads/2017/05/hla17.pdf" },
    ],
  },
];

const Lectures = () => {
  return (
    <div className="lectures-container">
      <h2 className="title">Lecture Resources</h2>
      <div className="grid">
        {lectures.map((lecture, index) => (
          <div key={index} className="card">
            <h3 className="branch-name">{lecture.branch}</h3>
            <ul>
              {lecture.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .lectures-container {
          max-width: 600px;
          margin: auto;
          text-align: center;
          font-family: "Arial", sans-serif;
          padding: 20px;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .grid {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .card {
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 250px;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .branch-name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .card ul {
          list-style: none;
          padding: 0;
        }

        .card li {
          margin: 8px 0;
        }

        .card a {
          text-decoration: none;
          color: #007bff;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .card a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Lectures;
