import React, { Component, useState } from 'react';
import { useNavigate  } from "react-router-dom";
// import Welcome from './welcome.jpg';

function Home() {
    let navigate=useNavigate();
    const [password,setPassword] = useState();

    if (password == '123' ) {
        return(
         
         <div className="App">
         <header className="App-header">
         <h2>
          Welcome Camper!
         </h2>
         <h3> </h3>
         <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                className='btn btn-secondary btn-lg' onClick={()=>{navigate("/map")}}>&nbsp;&nbsp; Map &nbsp;&nbsp;</button>
        <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
               className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/resOptions")}} >&nbsp;&nbsp; Track Resources &nbsp;&nbsp;</button>
         <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                className='btn btn-secondary btn-lg' onClick={()=>{navigate("/scanPlant")}}>&nbsp;&nbsp; Scan Plant &nbsp;&nbsp;</button></span>
         </header>
         </div>
        ) 
     } 
     else {
         return(
             <div className="container">
   
             <div className="col-md-6 mx-auto">
                <div className='form-group'>
                    <h3 className='text-center my-5'>Welcome Camper!</h3>
                    <h4>Enter team ID to login</h4>
                    <input type="text" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <br></br>
                {/* <img className='image-center' src={Welcome} /> */}
             </div>
            </div>
         )
       
     }
}

export default Home;