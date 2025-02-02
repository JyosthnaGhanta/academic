import React from "react";

const documents = [
  {
    title: "B.Tech-R22.1",
    subtitle: "Bachelors of Technology",
    url: "http://vignan.ac.in/2023pdf/R22.1-B.Tech%20Regulations.pdf",
    bgColor: "#ff6b6b"
  },
  {
    title: "B.Tech",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/2023pdf/R22%20regulations%20for%20B.Tech.pdf",
    bgColor: "#6b8eff"
  },
  {
    title: "B.Tech Minors",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/pdf1/R22%20B.Tech%20Minors.pdf",
    bgColor: "#50c878"
  },
  {
    title: "B.Tech Open Electives",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/pdf1/R22%20B.Tech%20Open%20Electives.pdf",
    bgColor: "#ffbb33"
  },
  {
    title: "AIML ",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/r22/R22%20B.Tech%20(CSE-AI&ML)%20Course%20Structure%20and%20Contents.pdf",
    bgColor: "#D2691E"
  },
  {
    title: "DS ",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/r22/R22%20B.Tech%20DS%20Course%20Structure%20and%20Contents.pdf",
    bgColor: "#EE82EE"
  },
  {
    title: "CS ",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/r22/R22%20B.Tech%20(CSE-CS)%20Course%20Structure%20and%20Contents.pdf",
    bgColor: "#DB7093"
  },
  {
    title: "CSBS ",
    subtitle: "Bachelors of Technology",
    url: "https://vignan.ac.in/r22/R22%20B.Tech%20(CSBS)%20Course%20Structure%20and%20Contents.pdf",
    bgColor: "#008080"
  }
];

const DocumentsGrid = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>B.Tech Regulations</h1>

      {/* First Section: 1 row with 2 links */}
      <div style={styles.block}>
        <h2 style={styles.blockHeader}>R22 Regulations</h2>
        <div style={styles.row}>
          <a
            href={documents[0].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[0].bgColor }}
          >
            <h3 style={styles.title}>{documents[0].title}</h3>
            <p style={styles.subtitle}>{documents[0].subtitle}</p>
          </a>
          <a
            href={documents[1].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[1].bgColor }}
          >
            <h3 style={styles.title}>{documents[1].title}</h3>
            <p style={styles.subtitle}>{documents[1].subtitle}</p>
          </a>
        </div>
      </div>

      {/* Second Section: 1 row with 2 links */}
      <div style={styles.block}>
        <h2 style={styles.blockHeader}>Honors and Minors Course Structure</h2>
        <div style={styles.row}>
          <a
            href={documents[2].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[2].bgColor }}
          >
            <h3 style={styles.title}>{documents[2].title}</h3>
            <p style={styles.subtitle}>{documents[2].subtitle}</p>
          </a>
          <a
            href={documents[3].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[3].bgColor }}
          >
            <h3 style={styles.title}>{documents[3].title}</h3>
            <p style={styles.subtitle}>{documents[3].subtitle}</p>
          </a>
        </div>
      </div>

      {}
      <div style={styles.block}>
        <h2 style={styles.blockHeader}>Branch-wise Course Structure</h2>
        <div style={styles.row}>
          <a
            href={documents[4].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[4].bgColor }}
          >
            <h3 style={styles.title}>{documents[4].title}</h3>
            <p style={styles.subtitle}>{documents[4].subtitle}</p>
          </a>
          <a
            href={documents[5].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[5].bgColor }}
          >
            <h3 style={styles.title}>{documents[5].title}</h3>
            <p style={styles.subtitle}>{documents[5].subtitle}</p>
          </a>
        </div>
        <div style={styles.row}>
          <a
            href={documents[6].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[6].bgColor }}
          >
            <h3 style={styles.title}>{documents[6].title}</h3>
            <p style={styles.subtitle}>{documents[6].subtitle}</p>
          </a>
          <a
            href={documents[7].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.card, backgroundColor: documents[7].bgColor }}
          >
            <h3 style={styles.title}>{documents[7].title}</h3>
            <p style={styles.subtitle}>{documents[7].subtitle}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  header: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333"
  },
  block: {
    marginBottom: "40px",
    textAlign: "center",
    
  },
  blockHeader: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
    
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "45%",
    marginBottom: "40px"
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "16px",
    opacity: "0.9"
  }
};

export default DocumentsGrid;
