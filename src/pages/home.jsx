
import {firestore} from '../firebase.js';
import React,{useState,useEffect, useReducer,useRef} from 'react';
import { useNavigate  } from "react-router-dom";
import {addDoc,getDocs,updateDoc,collection,doc,deleteDoc} from "@firebase/firestore";
import { query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
// import Welcome from './welcome.jpg';

function Home() {
    let navigate=useNavigate();
    // const { veri } = useParams();
    const [password,setPassword] = useState([]);
    const [verified, isVerified] = useState(false);
    // const initialLoggedInState = localStorage.getItem('isLoggedIn') ?? false;
    // const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState === 'true');
   
  
        const passCheck = async()=>{
            const p =await query(collection(firestore,"Passcode"),where("passcode", "==", password));
            const res = await getDocs(p);
            res.forEach((doc)=>{
                doc.data().passcode ? isVerified(true) : console.log("Invalid login")
            })
           
            return verified ? true : false;            
        };
        console.log(password);
    // if({veri}==true){
        if (verified) {
            // useEffect(() => {
            //     localStorage.setItem('isLoggedIn', isLoggedIn);
            //  }, [isLoggedIn]);
             
            return(
             <div className="App">
             <header className="App-header">
             <h2>
              Welcome Camper!
             </h2>
             <p>Your team passcode:{password} </p>
             <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                    className='btn btn-secondary btn-lg' onClick={()=>{navigate("/map")}}>&nbsp;&nbsp; Map &nbsp;&nbsp;</button>
            <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                   className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/resOptions/"+ password)}} >&nbsp;&nbsp; Track Resources &nbsp;&nbsp;</button>
             <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                    className='btn btn-secondary btn-lg' onClick={()=>{navigate("/scanPlant")}}>&nbsp;&nbsp; Scan Plant &nbsp;&nbsp;</button></span>
             </header>
             </div>
            ) 
         } 
    // }
       
     else {
         return(
             <div className="container">
   
             <div className="col-md-6 mx-auto">
                <div className='form-group'>
                    <h3 className='text-center my-5'>Welcome Camper!</h3>
                    <h4>Enter team ID to login</h4>
                   
                    <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <button type='button' onClick={() => passCheck()} className='btn btn-secondary'>Join</button>
                   
                </div>
                <br></br>
                {/* <img className='image-center' src={Welcome} /> */}
             </div>
            </div>
         )
       
     }
}

export default Home;