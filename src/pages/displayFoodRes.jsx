import {firestore} from '../firebase.js';
import React,{useState,useEffect, useReducer,useRef} from 'react';
// import { useNavigate  } from "react-router-dom";
// import {firestore} from "../firebase";
import {addDoc,getDocs,updateDoc,collection,doc,deleteDoc} from "@firebase/firestore";
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { query, where } from "firebase/firestore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

function displayFoodRes() {
        let navigate=useNavigate();
        const { password } = useParams();
        //ADD FOOD ITEMS
        const [modalFoodOpen, setAddModalOpen] = useState(false);
        const count=useRef();
        const nameFood=useRef();
        const ref = collection(firestore, "Food Item");
    
        const handleSave =async(e) => {
            e.preventDefault();
            console.log(count.current.value);
    
            let data={
                Food_name: nameFood.current.value,
                Item_count: Number(count.current.value), 
                passcode: password
            };
    
            try{
                addDoc(ref,data);
                alert("Successfully added!");
            }catch(e){
                console.log(e);
            }
            // navigate('/displayRes');
          window.location.reload();
    
        };

        //DISPLAY FOOD ITEMS
        const [items , setItem] = useState([]);
        const foodItemsCollectionRef =collection(firestore,"Food Item");

        useEffect(()=>{
            const getItems=async()=>{
              const p =await query(collection(firestore,"Food Item"),where("passcode", "==", password));
                const data = await getDocs(p);
                setItem(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            };
            getItems();
        },[]);
        
        //UPDATE FOOD ITEMS
          const addItems=async(id,count)=>{
              const itemDoc =doc(firestore,"Food Item",id);
              console.log(itemDoc);
              const newFields = {Item_count:count+1};
              await updateDoc(itemDoc,newFields);
              window.location.reload();
            
          };

          const subItems=async(id,count)=>{
            const itemDoc =doc(firestore,"Food Item",id);
            const newFields = {Item_count:count-1};
            await updateDoc(itemDoc,newFields);
            window.location.reload();
        };
       
        //DELETE FOOD ITEM
        const deleteItem=async(id)=>{
          if(alert("Are you sure?")==true){
            const itemDoc =doc(firestore,"Food Item",id);
            await deleteDoc(itemDoc);
            window.location.reload();
          }
          else{
            alert("Nothing deleted")
          }
          
        }

        return (
            <div className="container">
              <p>Your passcode: {password} </p>
              <h2>Food Item Count</h2>
              <div style={{marginLeft:1050}}>
              <button style={{fontWeight:'bold',paddingRight:10,paddingLeft:10}} 
               className='btn btn-primary btn-lg m-3' onClick={setAddModalOpen} >&nbsp;&nbsp; Add Food Item &nbsp;&nbsp;</button>
              </div>
                
            <table class="table table-dark table-striped">
                        <thead>
                            <tr style={{backgroundColor:"Green"}}>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Food Item</th>
                            <th scope="col">Count</th>
                            <th scope="col-md-4" class="spaceButtons">Edit Count</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
            
                
                        <tbody>
                        {items.map((item) => {
                            return(
                            <tr>
                            <td>{item.Food_name}</td>
                            <td>{item.Item_count}</td>
                            <td class="spaceButtons">
                             
                              <button className='btn btn-secondary btn-lg' onClick={(e) => addItems(item.id, item.Item_count)}>+</button>
                              <button className='btn btn-secondary btn-lg' onClick={(e) => subItems(item.id, item.Item_count)}>-</button>
                    
                            </td>
                            <td>
                            <button className='btn btn-danger btn-lg' onClick={()=>{deleteItem(item.id)}}>Delete</button>
                            </td>
                            </tr>
                            );
                            
                        })}
                        </tbody>
               </table>
               <button className='btn btn-secondary' onClick={()=>{navigate("/resOptions/"+password)}}>Back</button>
               <Modal
                isOpen={modalFoodOpen}
                onRequestClose={() => setAddModalOpen(false)}
                style={customStyles}>
                <h2>Add resources</h2>
                <form onSubmit={handleSave}>
                <label>Food Item Name</label>
                    <input type="text" ref={nameFood}/><br></br>
                    <br></br>
                    <label>Food Item Count</label>
                    <input type="number" ref={count}/><br></br>
                    <br></br>
                    <button type="submit" style={{fontWeight:'bold', paddingRight:50,paddingLeft:40}}>Save</button>
                </form>
           
                <button className='btn btn-secondary' onClick={() => setAddModalOpen(false)}>Close Modal</button>
              </Modal>

              {/* <Modal
                isOpen={modalUpdateOpen}
                onRequestClose={() => setUpdateModalOpen(false)}
                style={customStyles}>
                <h2>Add resources</h2>
                <form onSubmit={updateItems}>
                <label>Food Item Name</label>
                    <input type="text" ref={nameFood}/><br></br>
                    <br></br>
                    <label>Food Item Count</label>
                    <input type="number" ref={count}/><br></br>
                    <br></br>
                    <button type="submit" style={{fontWeight:'bold', paddingRight:50,paddingLeft:40}}>Save</button>
                </form>
           
                <button className='btn btn-secondary' onClick={() => setUpdateModalOpen(false)}>Close Modal</button>
              </Modal> */}
            </div>
        
        );
    }
      
export default displayFoodRes;

   
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