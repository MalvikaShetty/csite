import {firestore} from '../firebase.js';
import React,{useState,useEffect} from 'react';
// import { useNavigate  } from "react-router-dom";
// import {firestore} from "../firebase";
import {getDoc,collection} from "@firebase/firestore";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom'

function displayRes() {
        const [info , setInfo] = useState([]);
    //     const [info , setInfo] = useState([]);
    //     useEffect(()=>{
    //         const getPost=[];
    //         const response= collection(firestore, "Food Item")
    //         .onSnapshot((querySnapshot) => {
    //             querySnapshot.forEach(element => {
    //                 getPost.push({
    //                     ...doc.data(),
    //                     key:doc.id,
    //                 })
    //             });
    //     } )
    // })
        // Start the fetch operation as soon as
        // the page loads


        //WORKS//kinda
        window.addEventListener('load', () => {
            Fetchdata();
          });
      
        // Fetch the required data using the get() method
        const Fetchdata = async ()=>{
            try {
                console.log("111)")
                const response= collection(firestore, "Food Item")
                console.log("g", response);
                const data = await response.get()
                data.docs.forEach(item=>{
                    console.log("item:", item)
                    // setBlogs([...info,item.data()])
                })
                // .then((querySnapshot) => {
                    
                //     // Loop through the data and store
                //     // it in array to display
                //     querySnapshot.forEach(element => {
                //         var data = element.data();
                //         setInfo(arr => [...arr , data]);
                //         console.log("hjahj", data)
                //     });
                // })
                console.log("222)")
            } catch (e) {
                console.log(e)
            }
        }
          
        // Display the result on the page
        return (
            <div>
                  {/* {
                    items && items.map(i=>{
                    return(
                        <div className="blog-container">
                        <h4>{i.Food_name}</h4>
                        <p>{i.Item_count}</p>
                        </div>
                    )
                    })
                } */}
                <center>
                <h2>Student Details</h2>
                </center>
              
            {
                info.map((data) => (
                <h2>{data.Food_name} wow {data.Item_count}</h2>  
                ))
            }
            
            </div>
      
        );
    }
      
    // Define how each display entry will be structured
    const Frame = ({name , count}) => {
        console.log(name + " " + count );

//     const [items,setItems]=useState([])
//   const fetchItems=async()=>{
//     const response=collection(firestore, "Food Item");
//     const data=await getDoc(response);
//     data.docs.forEach(item=>{
//        setItems([...items,item.data()])
//     })
//   }
//   useEffect(() => {
//     fetchItems();
//   }, [])

//     return(
//         <center>
//         <div className="div">
              
// <p>NAME : {name}</p>

              
// <p>Count : {count}</p>

            

//         </div>
//     </center>
    
//     );
}

export default displayRes;
// <div className="App">
    //   {
    //     items && items.map(i=>{
    //       return(
    //         <div className="blog-container">
    //           <h4>{i.Food_name}</h4>
    //           <p>{i.Item_count}</p>
    //         </div>
    //       )
    //     })
    //   }
   
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