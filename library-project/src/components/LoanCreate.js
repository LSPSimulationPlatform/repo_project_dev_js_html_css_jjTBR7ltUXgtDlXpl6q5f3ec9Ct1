import { useState } from "react";

function LoanCreate ({onAddLoan,onNavigate}){
const[bookTitle,setBookTitle]=useState("");
const[borrowedDate,setBorrowedDate]=useState("");
const[returnedDate,setReturnedDate]=useState("");
const[userStatus,setUserStatus]=useState("");

const saveLoan=()=>{
    if(!bookTitle){alert("KItab adi qeyd olunmayib");return;}


    const newLoan={bookTitle,borrowedDate,returnedDate,userStatus};

 onAddLoan(newLoan);
alert("Ugurla qeyd olundu");
  

 setBookTitle("");
 setBorrowedDate("");
 setReturnedDate("");
 setUserStatus("") ;
}

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

const backButtonStyle={
    marginLeft:15,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,}

    return(
        <div style={{width:600, margin:"20px auto", backgroundColor:"#f4f4f4", borderRadius:20,padding:20}}>
           <h1 style={{color: "blue" , textAlign: "center"}}>Loan Create Page</h1><br/>
           <label style={{padding:5}}>Book Title</label><br/>
           <input style={inputStyle} placeholder="Book Name" value={bookTitle} onChange={(e)=>setBookTitle(e.target.value)} /><br/>

           <label style={{padding:5}}>Borrowed Date</label><br/>
           <input type="date" style={inputStyle}  value={borrowedDate} onChange={(e)=>setBorrowedDate(e.target.value)} /><br/>

           <label style={{padding:5}}>Returned Date</label><br/>
           <input type="date" style={inputStyle}  value={returnedDate} onChange={(e)=>setReturnedDate(e.target.value)} /><br/>
           
           <label style={{padding:5}}>Status</label><br/>
           <select style={inputStyle}  value={userStatus} onChange={(e)=>setUserStatus(e.target.value)} >
             <option>Available</option>
             <option>Borrowed</option>
            </select> <br/>

           <button style={buttonStyle} onClick={saveLoan}>Save</button>
           <button style={backButtonStyle} onClick={()=>onNavigate("main")}>Back </button>
 
        </div>
    )

}

export default LoanCreate;
