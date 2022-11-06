
    import {firestore} from '../firebase.js';
    import React,{useState,useEffect, useReducer,useRef} from 'react';
    import { useNavigate  } from "react-router-dom";
    import {addDoc,getDocs,updateDoc,collection,doc,deleteDoc} from "@firebase/firestore";
    import { query, where } from "firebase/firestore";
    import { useParams } from "react-router-dom";

    function Join() {
    let navigate=useNavigate();
    const [password,setPassword] = useState([]);
    const [verified, isVerified] = useState(false);

        //JOINING USING THE PASSCODE
        const passCheck = async()=>{
            const p =await query(collection(firestore,"Passcode"),where("passcode", "==", password));
            const res = await getDocs(p);
            res.forEach((doc)=>{
                doc.data().passcode ? isVerified(true) : console.log("Invalid login")
            })
           
            return verified ? true : false;            
        };

        if(verified){navigate("/resOptions/"+password)}
        //GENERATING PASSCODE
        const ref = collection(firestore, "Passcode");
        const passGenerate = async()=>{
            // *Code to generate random code
            const code = (Math.random() + 1).toString(36).substring(6);
            let data={
                passcode: code
            };
    
            try{
                addDoc(ref,data);
                alert("Your code is " + code );
            }catch(e){
                console.log(e);
            }
                     
        };
  
     return(
            <div className="container">
  
            <div className="col-md-6 mx-auto">
               <div className='form-group'>
                   <h2 className='text-center my-5'>To add Resources</h2>
                   <h4>Enter team ID to login</h4>
                  
                   <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                   <br></br>
                   <button type='button' onClick={() => passCheck()} className='btn btn-secondary' style={{marginLeft:300}}>Join</button>
                   <br></br><br></br>
               </div>
            </div>
            <div className="col-md-6 mx-auto">
               <div className='form-group'>
                   
                   <h4>Generate passcode here</h4>
                  
                   {/* <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                   <br></br> */}
                   <button type='button' onClick={() => passGenerate()} className='btn btn-secondary' style={{marginLeft:285}}>Generate</button>
                  
               </div>
            </div>
           </div>
        )
}

        export default Join;