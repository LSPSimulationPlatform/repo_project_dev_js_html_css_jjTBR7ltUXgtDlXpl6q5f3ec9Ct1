import { useState } from "react";
function UserList({users,onNavigate}){
const[filterName,setFilterName]=useState("");
const filteredUsers=users.filter((user)=>user.userName.toLowerCase().includes(filterName.toLowerCase())
)

const thStyle={border:"1px solid gray",padding:5,textAlign:"center"};
const tdStyle={border:"1px solid gray",padding:5};

const backButtonStyle={
    marginLeft:15,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16} 

return(
    <div style={{background:"#f4f4f4",padding:20,width:600}}>
      <h1 style={{color: "red",textAlign:"left" }} >User List</h1><br/>
      <label style={{padding:5}}>Filter Name</label><br/>
      <input type="search" value={filterName} onChange={(e)=>setFilterName(e.target.value)}style={{width:"100%", borderRadius:10,
        padding:10,marginBottom:10, border:"1px solid gray"}}/><br/>

        <table style={{borderCollapse:"collapse", border:"1px solid gray",width:"100%"}}> 
         <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Total Book Borrowed</th>
              


            </tr>
         </thead>

         <tbody>

            {filteredUsers.length === 0 ? (  
             <tr>  
              <td colSpan="6" style={{ textAlign: "center", padding: "15px" }}>  
                Heç bir melumat tapilmadi  
              </td>  
             </tr>  
            ):(
            filteredUsers.map((user, index) => (  
              <tr key={user.userName}>  
                <td style={tdStyle}>{index + 1}</td>  
                <td style={tdStyle}>{user.userName}</td>  
                <td style={tdStyle}>{user.email}</td>  
                <td style={tdStyle}>{user.totalBookBorrowed}</td>  
                
              </tr>  
            ))  
           )}  
            </tbody>  
          </table>  <br/>  
          <button onClick={() => onNavigate("main")} style={backButtonStyle}>Back</button>
         

    



    </div>
)

}

export default UserList;