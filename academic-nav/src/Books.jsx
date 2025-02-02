import React from "react";

const books = [
  {
    branch: "AI & ML",
    links: [
      { title: "Deep Learning Book", url: "https://www.deeplearningbook.org/" },
      { title: "Statistical Learning", url: "https://www.statlearning.com/" },
    ]
  },
  {
    branch: "DS",
    links: [
      { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
      { title: "Learning Analytics", url: "https://solaresearch.org/wp-content/uploads/2017/05/hla17.pdf" },
    ]
  },
  {
    branch: "Cyber Security",
    links: [
      { title: "AI & Machine Learning in Cybersecurity", url: "https://www.researchgate.net/publication/380889139_AI_Machine_Learning_in_Cybersecurity" },
      { title: "Applying AI in Cybersecurity", url: "https://www.kyberturvallisuuskeskus.fi/sites/default/files/media/file/Applying%20AI%20in%20cybersecurity_EN.pdf" },
    ]
  },
  {
    branch: "CS-BS",
    links: [
      { title: "AI & Data Analytics for CS", url: "https://www.icsi.edu/media/webmodules/Academics/Elective_Paper_AIDA_CS.pdf" },
      { title: "CSBS Curriculum", url: "https://cac.annauniv.edu/aidetails/afug_2021_fu/Revised/IandC/B.Tech.CSBS.pdf" },
    ]
  }
];

const Books = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Reference Books</h1>
      <div style={styles.booksList}>
        {books.map((category, index) => (
          <div key={index} style={styles.branchSection}>
            <h2 style={styles.branchTitle}>{category.branch}</h2>
            <ul style={styles.linksList}>
              {category.links.map((link, idx) => (
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
  booksList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "100px",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px"
  },
  branchSection: {
    backgroundColor: "#d4e6f1",
    padding: "20px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "350px"
  },
  branchTitle: {
    fontSize: "22px",
    marginBottom: "10px",
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
    fontSize: "16px",
    color: "#007BFF",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#0056b3"
  }
};

export default Books;
