import { useState } from "react";

function BookUpdate({books,onUpdateBook,onNavigate}) {
const[bookCodeSearch,setBookCodeSearch]=useState("");
const[title,setTitle]=useState("");
const[bookCode,setBookCode]=useState("");
const[author,setAuthor]=useState("");
const[publishDate,setPublishDate]=useState("");
const[description,setDescription]=useState("");

const getBookInfo=()=>{
  if(!bookCodeSearch){alert("Book code qeyd olunmayib");return;}

  const product=books.find((p)=>p.bookCode.toLowerCase()===bookCodeSearch.toLowerCase());
  
  if(!product){alert("Uygunluq yoxdur ");return;}

setTitle(product.title);
setBookCode(product.bookCode);
setAuthor(product.author);
setPublishDate(product.publishDate);
setDescription(product.description);
}

const updateBookHandler=()=>{

  if(!title){alert("book name qeyd olunmayib");return;}

  const updated={title,bookCode,publishDate,author,description};

  onUpdateBook(updated);
  alert("her sey qeyd olundu");

  onNavigate("list");
  setAuthor("");
  setBookCode("");
  setTitle("");
  setPublishDate("");
  setDescription("");

  

 }


  const inputStyle = {
    width: 400,
    borderRadius: 10,
    marginBottom: 15,
    padding: 5,
  };

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

  return (
    <div style={{ backgroundColor: "#f4f4f4",  width: 600, padding:"20px 40px 20px 20px", borderRadius: 5,
     margin:"10px auto" }}>
      <h1 style={{ textAlign: "center", color: "red", marginBottom: 20 }}>
        Kitab Yenileme sehifesi
      </h1>


     <label>Book Code  Search</label>
      <br />
      <input
        type="text"
        value={bookCodeSearch}
        onChange={(e) => setBookCodeSearch(e.target.value)}
        placeholder="Enter book code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}/>
    
      <button
        onClick={getBookInfo}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          marginBottom: 20}}>
        Find Book
      </button><br/>





      <label style={{ padding: 5}}> Title </label><br />
      <input style={inputStyle} value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Kitab Adi" /><br />

      <label style={{ padding: 5 }}> Book Code </label><br />
      <input style={inputStyle} type="text" value={bookCode} onChange={(e)=>setBookCode(e.target.value)} placeholder="Kitab Kodu" /><br />

      <label style={{ padding: 5 }}>Author</label><br />
      <input style={inputStyle} value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Muellif" /><br />

      <label style={{ padding: 5 }}>Publication Year</label><br />
      <input style={inputStyle} value={publishDate} onChange={(e)=>setPublishDate(e.target.value)} type="date" /><br />

      <label style={{ padding: 5 }}>Description</label><br />
      <textarea style={inputStyle} value={description} onChange={(e)=>setDescription(e.target.value)}  rows={5} placeholder="Tesvir"></textarea><br />

      <button onClick={updateBookHandler} style={buttonStyle}>Update</button>
       <button onClick={() => onNavigate("main")} style={backButtonStyle} >
        Back to Main Page
      </button>
    </div>
  );
}

export default BookUpdate;
