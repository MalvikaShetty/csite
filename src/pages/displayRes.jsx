import {firestore} from '../firebase.js';
import React,{useState,useEffect, useReducer} from 'react';
// import { useNavigate  } from "react-router-dom";
// import {firestore} from "../firebase";
import {getDocs,collection} from "@firebase/firestore";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom'

function displayRes() {
        const [items , setItem] = useState([]);
        const foodItemsCollectionRef =collection(firestore,"Food Item");

        useEffect(()=>{
            const getItems=async()=>{
                const data = await getDocs(foodItemsCollectionRef);
                setItem(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            };
         
            getItems();
        },[]);
   
        return (
            <div>
            <table class="table table-dark table-striped">
                        <thead>
                            <tr class="table-primary">
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Food Item</th>
                            <th scope="col">Count</th>
                            </tr>
                        </thead>
             {items.map((item) => {
                return(
                    <div>
                        <tbody>
                            <tr>
                            <td>{item.Food_name}</td>
                            <td>{item.Item_count}</td>
                            </tr>
                        </tbody>
                    </div>
                );
             })}
               </table>
            </div>
      
        );
    }
      

export default displayRes;

   
{/* <table class="table table-dark table-striped">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
// </div>