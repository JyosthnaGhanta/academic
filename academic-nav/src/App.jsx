import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Admin from "./Admin";
import Dashboard from './Dashboard';
import Notion from './Notion'; 
import Marks from './Marks';
import Attendance from './Attendance';
import Books from './Books';
import Curriculum from './Curriculum';
import Lectures from './Lectures';
import Fee from './Fee';
import Quiz from './Quiz';

import OS from './OS';
import OOPS from './OOPS';
import DS from './DS';
import DBMS from './DBMS';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/admin" element={<Admin setIsLoggedIn={setIsLoggedIn} />} />
          { <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/notion" element={<Notion />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/books" element={<Books />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/quiz" element={<Quiz />} />

          <Route path="/OS" element={<OS />} />
          <Route path="/DS" element={<DS />} />
          <Route path="/OOPS" element={<OOPS />} />
          <Route path="/DBMS" element={<DBMS />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
