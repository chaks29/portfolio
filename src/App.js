import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import image from './content/MacBook Pro 16_ - 1.png';
import Layout from './content/main.js';
import Profile from './content/profile.js';
import Resume from './content/resume.js';
import Projects from './content/project.js';
import Contact from './content/contact.js';



function App() {
  return (
  <div>  
    <body>
        <img class="bg" src={image} alt="web"/>
        <div class="menu">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>       
        </div>
        <p class="intro"> Hey there!! This Aswath Chakravarthi</p>
        <p class="intro2">As an ambitious college student with a fervent passion for AI & ML, data science, cloud technologies, and UX/UI design. My comprehensive understanding of various AI & ML algorithms and frameworks, coupled with my proficiency in cloud computing principles, I have experience in developing innovative solutions and contributing as a team player.</p>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} /> 
          <Route path="Resume" element={<Resume />} />
          <Route path="Project" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    
    </body>  
    
  </div>
  );
}

export default App;