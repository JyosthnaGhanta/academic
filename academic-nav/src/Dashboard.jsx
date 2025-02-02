import React, { useState } from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import ScrollingImages from "./ScrollingImages"; 
import TextSummarizer from './TextSummarizer';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); 
  };

  const features = [
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFKDL9TZhpKac8w0AMEPcLU8bBO6K9VGc_w&s", 
      title: "Notion",
      description: "Your digital notebook for all things organized.",
      path: "/notion" 
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/548/548198.png", 
      title: "Curriculum",
      description: "The roadmap of your learning journey.",
      path:"/curriculum"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjhwTa4YdhER16_XwaXd0gaIIeUG8cqNG4g&s", 
      title: "Books",
      description: "Your treasure trove of knowledge.",
      path:"/books"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p9cdhJLSkZWVjCWWqQB0HjVvEGYiqoAvoQ&s", 
      title: "Marks",
      description: "Your scorecard of success.",
      path: "/marks" 
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidcUwFOZjx-BrZAylB_f3yLc9OveANE-Nog&s", 
      title: "Attendance",
      description: "The roll call of your classroom adventures.",
      path: "/attendance" 
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/354/354652.png", 
      title: "Lectures",
      description: "Engaging stories from your teachers.",
      path:'/lectures'
    },
    {
      imgSrc: "https://www.yogaiya.in/iya/images/2020/07/06/fees-structure.jpg", 
      title: "Fee Details",
      description: "The price tag on your education.",
      path:'/fee'
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo_cSY1-sCGD0lyz99DHs-DZWLodkvl_HYg&s", 
      title: "Assessments",
      description: "Fun challenges to test your skills!",
      path:'/quiz'
    }
  ];

  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery) || feature.description.toLowerCase().includes(searchQuery)
  );

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.cNoC0l232e4JkNobbRID0AHaCV&pid=Api&P=0&h=180" alt="Logo"/>
        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar"
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <ScrollingImages />
      
      <section className="dashboard-section" id="dashboard">
        <div className="search-results">
          {searchQuery && (
            <p className="search-message">
              Showing results for: <strong>{searchQuery}</strong>
            </p>
          )}
        </div>
        
        <div className="features">
          {filteredFeatures.length > 0 ? (
            filteredFeatures.map((feature) => (
              <div className="feature" key={feature.title} onClick={() => navigate(feature.path)} style={{ cursor: 'pointer' }} >
                <img src={feature.imgSrc} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </section>

      {}
      <TextSummarizer />

      <footer className="dashboard-footer">
        <p>© 2025 Academic Navigator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
