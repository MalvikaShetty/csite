// import Form from 'react-bootstrap/Form';
import React, { Component, useState, useRef } from 'react';
// import { useNavigate  } from "react-router-dom";
import {firestore} from "../firebase";
import {addDoc,collection} from "@firebase/firestore";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


function addFoodRes() {
    const navigate = useNavigate();
    const count=useRef();
    const nameFood=useRef();
    const ref = collection(firestore, "Food Item");

    const handleSave =async(e) => {
        e.preventDefault();
        console.log(count.current.value);

        let data={
            Food_name: nameFood.current.value,
            Item_count: count.current.value, 
        };

        try{
            addDoc(ref,data);
            alert("Successfully added!");
        }catch(e){
            console.log(e);
        }
        navigate('/displayRes');

    };
  return (
    <div className="App">
    <h1>Add resources</h1>
    <form onSubmit={handleSave}>
    <label>Food Item Name</label>
        <input type="text" ref={nameFood}/><br></br>
        <br></br>
        <label>Food Item Count</label>
        <input type="number" ref={count}/><br></br>
        <br></br>
        <button type="submit" style={{fontWeight:'bold', paddingRight:50,paddingLeft:40}}>Save</button>
    </form>
    </div>
   
    // <Form>
    //   <Form.Group className="mb-3" controlId="formGroupEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formGroupPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    // </Form>
  );
}

export default addFoodRes;