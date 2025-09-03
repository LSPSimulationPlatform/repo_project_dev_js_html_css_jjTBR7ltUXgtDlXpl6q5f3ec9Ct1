function MainPage({onSelectPage}){

    const buttonStyle = {
    display: "block",
    width: "80%",
    margin: "15px auto",
    padding: "12px 0",
    fontSize: 18,
    borderRadius: 6,
    border: "none",
    backgroundColor: "#4D7AFF",
    color: "white",
    cursor: "pointer",
  };

  return(
    <div style={{textAlign:"center", width:600, margin: "20px auto", padding: 15, backgroundColor: "#f4f4f4",borderRadius:15}}>
      <h1 style={{textAlign:"center", color:"red" }}>Main Page</h1><br/> 
    
      <button style={buttonStyle} onClick={()=>onSelectPage("create")}> Book Create Page</button><br/>
      <button style={buttonStyle} onClick={()=>onSelectPage("update")}> Book Update Page</button><br/>
      <button style={buttonStyle} onClick={()=>onSelectPage("list")}> Book list Page</button><br/>
      <button style={buttonStyle} onClick={()=>onSelectPage("userList")}> User Page</button><br/>
      <button style={buttonStyle} onClick={()=>onSelectPage("loanCreate")}> Loan History Page</button><br/>
    
    

    </div>
  )
}

export default MainPage;