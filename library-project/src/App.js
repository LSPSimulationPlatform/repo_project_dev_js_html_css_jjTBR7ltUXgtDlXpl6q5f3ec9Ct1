
import{useState} from "react";
import BookCreate from "./components/BookCreate";


function App() {

 const[books,setBooks]=useState([]);
const addProduct=(newProduct)=>{
  console.log("New Products" , newProduct);
  setBooks((prev)=>[...prev,newProduct]);
}


  return (
    <div>
     <BookCreate onAddBook={addProduct}/>
    </div>
  
  
  );
}

export default App;
