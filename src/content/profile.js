import './profile.css';
import image from './MacBook Pro 16_ - 1.png';

function Profile(){
  return(
    <div>  
    <body>
        <img class="bg" src={image} alt="web"/>
        <p class="intro"> Hey there!! This Aswath Chakravarthi</p>
        <p class="intro2">As an ambitious college student with a fervent passion for AI & ML, data science, cloud technologies, and UX/UI design. My comprehensive understanding of various AI & ML algorithms and frameworks, coupled with my proficiency in cloud computing principles, I have experience in developing innovative solutions and contributing as a team player.</p>
    </body>
  </div>
  );
  }
  
  export default Profile;