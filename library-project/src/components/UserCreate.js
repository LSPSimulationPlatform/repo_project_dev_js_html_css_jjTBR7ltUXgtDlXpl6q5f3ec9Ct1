import { useState } from "react";

function UserCreate ({onAddUser,onNavigate}){
const[userName,setUserName]=useState("");
const[email,setEmail]=useState("");
const[totalBookBorrowed,setTotalBookBorrowed]=useState("");

const saveUser=()=>{
    if(!userName){alert("Istifadeci adi qeyd olunmayib");return;}


    const newUser={userName,email,totalBookBorrowed}

 onAddUser(newUser);
alert("Ugurla qeyd olundu");
  onNavigate("list")

 setUserName("");
 setEmail("");
 setTotalBookBorrowed("");}

 const inputStyle={width: 400,
    borderRadius: 10,
    marginBottom: 15,
    padding: 5};

const buttonStyle = {
    width: 100,
    padding: 5,
    color: "white",
    backgroundColor: "blue",
    borderRadius: 15,
    fontSize: 15,
    cursor: "pointer",
  };



    return(
        <div style={{width:600, margin:"20px auto", backgroundColor:"#f4f4f4", borderRadius:20,padding:20}}>
           <h1 style={{color: "blue" , textAlign: "center"}}>User Create Page</h1><br/>
           <label style={{padding:5}}>Name</label><br/>
           <input style={inputStyle} placeHolder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)} /><br/>

           <label style={{padding:5}}>Email</label><br/>
           <input style={inputStyle} placeHolder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>

           <label style={{padding:5}}>Total Book Borrowed</label><br/>
           <input style={inputStyle} placeHolder="Book Count" value={totalBookBorrowed} onChange={(e)=>setTotalBookBorrowed(e.target.value)} /><br/>

           <button style={buttonStyle} onClick={saveUser}>Save</button>
        
        </div>
    )

}

export default UserCreate;