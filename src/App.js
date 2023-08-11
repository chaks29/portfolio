import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './content/hello.js'
import Layout from './content/main.js';
import Profile from './content/profile.js';
import Resume from './content/resume.js';
import Project from './content/project.js';
import Contact from './content/contact.js';



function App() {
  return (
  
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="Profile" element={<Profile />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;