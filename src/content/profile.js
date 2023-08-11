import './profile.css';
import React, {useState} from 'react';



const Profile = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
    setshow(!show)
  }
  return(
  <div className='myself'>
    <div className='hero'>
    <h1><b>Profile</b></h1>
    <h2><b><i>Aswath C</i></b></h2>
    <h3><b><i>Artificial Intelligence and Data Science</i></b></h3>
    <h3><b><i><u>aswath.21ad@kct.ac.in</u></i></b></h3>
    <div className='year'>
            {
                show && <div className='cur_year'>
                    <p><b><i>I am studying third year</i></b></p>
                </div>
            }
               <button type='button' onClick={buttons1} className='dis_year'><b><i>Year</i></b></button>
            </div>
  
    </div>
    
    
   
  </div>
  );
  }
  
  export default Profile;