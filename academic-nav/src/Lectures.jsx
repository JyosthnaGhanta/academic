import React from "react";

const lectures = [
  {
    branch: "AI&ML",
    links: [
      { title: "Aircraft Control System", url: "https://onlinecourses.nptel.ac.in/noc25_ae07/preview" },
      { title: "Affective Computing", url: "https://onlinecourses.nptel.ac.in/noc25_cs04/preview" },
    ]
  },
  {
    branch: "DS",
    links: [
      { title: "Data Analytics with python", url: "https://onlinecourses.nptel.ac.in/noc25_cs17/preview" },
      { title: "Reinforcement Learning", url: "https://onlinecourses.nptel.ac.in/noc25_cs62/preview" },
    ]
  },
  {
    branch: "CS",
    links: [
      { title: "Cyber Security and privacy", url: "https://onlinecourses.nptel.ac.in/noc23_cs127/preview" },
      { title: "Computer Networks and internet Protocol", url: "https://onlinecourses.nptel.ac.in/noc25_cs15/preview" },
    ]
  },
  {
    branch: "CS-BS",
    links: [
      { title: "Advanced Computer Architecture", url: "https://onlinecourses.nptel.ac.in/noc25_cs01/preview" },
      { title: "Cloud Computing", url: "https://onlinecourses.nptel.ac.in/noc25_cs11/preview" },
    ]
  }
];

const Lectures = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lecture Links</h1>
      <div style={styles.lecturesList}>
        {lectures.map((lecture, index) => (
          <div key={index} style={styles.branchSection}>
            <h2 style={styles.branchTitle}>{lecture.branch}</h2>
            <ul style={styles.linksList}>
              {lecture.links.map((link, idx) => (
                <li key={idx} style={styles.linkItem}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    textAlign: "center"
  },
  header: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#333"
  },
  lecturesList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px"
  },
  branchSection: {
    backgroundColor: "#f8c8c8", 
    padding: "20px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "300px"
  },
  branchTitle: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#444",
    fontWeight: "bold"
  },
  linksList: {
    listStyle: "none",
    paddingLeft: "0"
  },
  linkItem: {
    marginBottom: "10px"
  },
  link: {
    fontSize: "18px",
    color: "#007BFF",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#0056b3"
  }
};

export default Lectures;
