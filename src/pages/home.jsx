
import {firestore} from '../firebase.js';
import React,{useState,useEffect, useReducer,useRef} from 'react';
import { useNavigate  } from "react-router-dom";
import {addDoc,getDocs,updateDoc,collection,doc,deleteDoc} from "@firebase/firestore";
import { query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
// import Welcome from './welcome.jpg';

function Home() {
    let navigate=useNavigate();
    const { passwor } = useParams();
   
  

            // if (verified) {
                return(
                 <div className="App">
                 <header className="App-header">
                 <h2>
                  Welcome Camper!
                 </h2>
                 <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                        className='btn btn-secondary btn-lg' onClick={()=>{navigate("/map")}}>&nbsp;&nbsp; Map &nbsp;&nbsp;</button>
                <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                       className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/join")}} >&nbsp;&nbsp; Track Resources &nbsp;&nbsp;</button>
                 <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                        className='btn btn-secondary btn-lg' onClick={()=>{navigate("/scanPlant")}}>&nbsp;&nbsp; Scan Plant &nbsp;&nbsp;</button></span>
                 </header>
                 </div>
                ) 
                // }
           
}

export default Home;