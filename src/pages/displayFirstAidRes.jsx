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

function displayFirstAidRes() {
        let navigate=useNavigate();
        const { password } = useParams();
        //ADD FIRST AID ITEM
        const [modalFirstAidOpen, setAddModalOpen] = useState(false);
        const countFa=useRef();
        const nameFa=useRef();
        const ref = collection(firestore, "FirstAidItems");
    
        const handleSave =async(e) => {
            e.preventDefault();
    
            let data={
                fa_name: nameFa.current.value,
                fa_item_count: Number(countFa.current.value), 
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
        // const foodItemsCollectionRef =collection(firestore,"FirstAidItems");

        useEffect(()=>{
            const getItems=async()=>{
              const p =await query(collection(firestore,"FirstAidItems"),where("passcode", "==", password));
                const data = await getDocs(p);
                setItem(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            };
            getItems();
        },[]);
        
        //UPDATE FOOD ITEMS
          const addItems=async(id,count)=>{
              const itemDoc =doc(firestore,"FirstAidItems",id);
              console.log(itemDoc);
              const newFields = {fa_item_count:count+1};
              await updateDoc(itemDoc,newFields);
              window.location.reload();
            
          };

          const subItems=async(id,count)=>{
            const itemDoc =doc(firestore,"FirstAidItems",id);
            const newFields = {fa_item_count:count-1};
            await updateDoc(itemDoc,newFields);
            window.location.reload();
        };
       
        //DELETE FOOD ITEM
        const deleteItem=async(id)=>{
          if(alert("Are you sure?")==true){
            const itemDoc =doc(firestore,"FirstAidItems",id);
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
              <h2>First Aid Item Count</h2>
              <div style={{marginLeft:1100}}>
              <button style={{fontWeight:'bold',paddingRight:10,paddingLeft:10}} 
               className='btn btn-primary btn-lg m-3' onClick={setAddModalOpen} >&nbsp;&nbsp; Add Item &nbsp;&nbsp;</button>
              </div>
                
            <table class="table table-dark table-striped">
                        <thead>
                            <tr style={{backgroundColor:"Green"}}>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">First Aid Item</th>
                            <th scope="col">Count</th>
                            <th scope="col-md-4" class="spaceButtons">Edit Count</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
            
                
                        <tbody>
                        {items.map((item) => {
                            return(
                            <tr>
                            <td>{item.fa_name}</td>
                            <td>{item.fa_item_count}</td>
                            <td class="spaceButtons">
                             
                              <button className='btn btn-secondary btn-lg' onClick={(e) => addItems(item.id, item.fa_item_count)}>+</button>
                              <button className='btn btn-secondary btn-lg' onClick={(e) => subItems(item.id, item.fa_item_count)}>-</button>
                    
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
                isOpen={modalFirstAidOpen}
                onRequestClose={() => setAddModalOpen(false)}
                style={customStyles}>
                <h2>Add resources</h2>
                <form onSubmit={handleSave}>
                <label>First Aid Item Name</label>
                    <input type="text" ref={nameFa}/><br></br>
                    <br></br>
                    <label>Food Item Count</label>
                    <input type="number" ref={countFa}/><br></br>
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
      
export default displayFirstAidRes;

