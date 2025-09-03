import { useState } from "react";

function BookList({books,onNavigate}){

const[filterCode,setFilterCode]=useState("");

const filteredBooks=books.filter((product)=>product.bookCode.toLowerCase().includes(filterCode.toLowerCase())
)

const thStyle={padding:5,border: "1px solid grey",textAlign:"left"}
const tdStyle={padding:5,border:"1px solid grey"}
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
        <div style={{backgroundColor:"#f4f4f4", width:600, margin:"20px auto" ,padding:20, borderRadius: 20}}>
          <h1 style={{color: "red"}}>Book List</h1><br/>
            <label style={{padding:5}}>List</label><br/>
            <input type="search" placeholder="Book Code" value={filterCode} onChange={(e) => setFilterCode(e.target.value)}
             style={{  
          width: "100%", padding:8,marginBottom: 15,borderRadius: 5, border: "1px solid gray"}}/>

                 <table  
        style={{ width: "100%", borderCollapse: "collapse", border: "1px solid gray"}}>  
        
        <thead style={{ backgroundColor: "#ddd" }}>  
          <tr>  
            <th style={thStyle}>#</th>  
            <th style={thStyle}>Title</th>  
            <th style={thStyle}>Book Code</th>  
            <th style={thStyle}>Publish Date</th>  
            <th style={thStyle}>Author</th>  
            <th style={thStyle}>Description</th> 
          </tr>  
        </thead>    
        <tbody>  
          
          {filteredBooks.length === 0 ? (  
            <tr>  
              <td colSpan="6" style={{ textAlign: "center", padding: "15px" }}>  
                Heç bir melumat tapilmadi  
              </td>  
            </tr>  
          ):(  
        
            filteredBooks.map((product, index) => (  
              <tr key={product.bookCode}>  
                <td style={tdStyle}>{index + 1}</td>  
                <td style={tdStyle}>{product.title}</td>  
                <td style={tdStyle}>{product.bookCode}</td>  
                <td style={tdStyle}>{product.author}</td>  
                <td style={tdStyle}>{product.publishDate}</td>   
                <td style={tdStyle}>{product.description}</td> 
              </tr>  
            ))  
          )}  
        </tbody>  
      </table>  <br/>  
      <button onClick={() => onNavigate("main")} style={backButtonStyle}> Geri</button>
           

        </div>
    )

}

export default BookList;