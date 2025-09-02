import { useState } from "react";

function BookCreate({onAddBook}) {

const[title,setTitle]=useState("");
const[bookCode,setBookCode]=useState("");
const[author,setAuthor]=useState("");
const[publishDate,setPublishDate]=useState("");
const[description,setDescription]=useState("");

const saveButton=()=>{
  if(!title){alert("Book name qeyd olunmayib");return;}
  if(!bookCode){alert("Book code teyin olunmayib");return;}

  const newProduct={title,bookCode,author,publishDate};
onAddBook(newProduct);
alert("Mehsul elave olundu");

setTitle("");
setAuthor("");
setBookCode("");
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

  return (
    <div style={{ backgroundColor: "#f4f4f4",  width: 600, padding:"20px 40px 20px 20px", borderRadius: 5,
     margin:"10px auto" }}>
      <h1 style={{ textAlign: "center", color: "red", marginBottom: 20 }}>
        Kitab yaratma sehifesi
      </h1>

      <label style={{ padding: 5 }}> Title </label><br />
      <input style={inputStyle} value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Kitab Adi" /><br />

      <label style={{ padding: 5 }}> Book Code </label><br />
      <input style={inputStyle} type="text" value={bookCode} onChange={(e)=>setBookCode(e.target.value)} placeholder="Kitab Kodu" /><br />

      <label style={{ padding: 5 }}>Author</label><br />
      <input style={inputStyle} value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Muellif" /><br />

      <label style={{ padding: 5 }}>Publication Year</label><br />
      <input style={inputStyle} value={publishDate} onChange={(e)=>setPublishDate(e.target.value)} type="date" /><br />

      <label style={{ padding: 5 }}>Description</label><br />
      <textarea style={inputStyle} value={description} onChange={(e)=>setDescription(e.target.value)}  rows={5} placeholder="Tesvir"></textarea><br />

      <button onClick={saveButton} style={buttonStyle}>Save</button>
      <button style={buttonStyle}>Back to main page</button>
    </div>
  );
}

export default BookCreate;
