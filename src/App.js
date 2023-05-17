import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'; // Updated import statement
import SignUpForm from './components/SignUpForm'; // Updated import statement

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} /> {/* Updated Route */}
        <Route path="/signup" element={<SignUpForm />} /> {/* Updated Route */}
      </Routes>
    </Router>
  );
};

export default App;
