import React, { Component, useState, useRef } from 'react';
// import { useNavigate  } from "react-router-dom";
import {firestore} from "../firebase";
import {addDoc,collection} from "@firebase/firestore";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

function resOptions() {

    let navigate=useNavigate();
    const { password } = useParams();

    return(
        
    <div className="container-res">
        <p>Your passcode: {password} </p>
        <h2 style={{marginLeft:200, color:'#ffc642'}}>Keep track of your Resources</h2><br></br>
  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="card-title text-right"><i class="material-icons">Food Items</i></h4>
    <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset"/>
        <div style={{padding:8}}>
        <h6 class="card-text"> Click here to add and see count of food items</h6> 
        </div>
       
        <a onClick={()=>{navigate("/displayfoodres/"+ password)}} class="btn stretched-link"></a>
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="card-title text-right"><i class="material-icons">First Aid</i></h4>
    <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset"/>
    <div style={{padding:8}}>
        <h6 class="card-text"> Click here to add and see count of First Aid items</h6> 
        </div>
        <a onClick={()=>{navigate("/displayFirstAidRes/"+ password)}} class="btn stretched-link"></a>
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="card-title text-right"><i class="material-icons">Wood</i></h4>
    <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset"/>
    <div style={{padding:8}}>
        <h6 class="card-text"> Click here to add and see count of Wood</h6> 
        </div>
        <a href="/addwoodres" class="btn stretched-link"></a>
  </div>
    </div>
   
  </div>
  <br></br>
  <button className='btn btn-warning' onClick={()=>{navigate("/")}}>Back</button>
</div>

    );
}

export default resOptions;