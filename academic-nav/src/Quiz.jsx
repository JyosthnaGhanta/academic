import React from "react";
import { Link } from "react-router-dom";

const SubjectHub = () => {
  return (
    <div style={outerContainerStyle}> {}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
      }}>

        <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>Subject Hub</h1>
        <Link to="/OS" style={linkStyle}>Operating System</Link>
        <Link to="/DBMS" style={linkStyle}>Database Management System</Link>
        <Link to="/DS" style={linkStyle}>Data Structures</Link>
        <Link to="/OOPS" style={linkStyle}>OOPs through Java</Link>
      </div>
    </div>
  );
};

const outerContainerStyle = { 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", 
  width: "100vw"  
};

const linkStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#3498db",
  color: "white",
  padding: "15px",
  borderRadius: "5px",
  textDecoration: "none",
  marginBottom: "10px",
  width: "fit-content" 
};

export default SubjectHub;