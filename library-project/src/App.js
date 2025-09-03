import{useState} from "react";
import BookCreate from "./components/BookCreate";
import MainPage from "./components/MainPage";
import UserCreate from "./components/UserCreate";
import BookList from "./components/BookList";
import LoanCreate from "./components/LoanCreate";
import UserList from "./components/UserList";
import BookUpdate from "./components/BookUpdate";


function App() {

const[currentPage,setCurrentPage]=useState("main")

 const[books,setBooks]=useState([]);
const addProduct=(newProduct)=>{
  console.log("New Products" , newProduct);
  setBooks((prev)=>[...prev,newProduct]);
};


const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((p) =>
        p.bookCode === updatedBook.bookCodeCode ? updatedBook : p
      )
    );
  };


const [loans,setLoans]=useState([]);
const addLoan=(newLoan)=>{
  console.log("New Loans" , newLoan);
  setLoans((prev)=>[...prev,newLoan]);
};


const [users,setUsers]=useState([]);
const addUser=(newUser)=>{
  console.log("New Loans" , newUser);
  setUsers((prev)=>[...prev,newUser]);
};



let pageContent;

switch (currentPage) {
  case "create":
    pageContent = (
      <BookCreate onAddBook={addProduct} onNavigate={setCurrentPage} />
    );
    break;

   case "update":
    pageContent=(<BookUpdate
          books={books}
          onUpdateBook={updateBook} onNavigate={setCurrentPage}/>);
      break; 


   
    case "list":
    pageContent=(<BookList books={books} onNavigate={setCurrentPage}/>);

    break;

    case "loanCreate":
      pageContent=(<LoanCreate onAddLoan={addLoan} onNavigate={setCurrentPage}/>);
      break;

     case "userList":
      pageContent=(<UserList users={users} onNavigate={setCurrentPage}/>);
      break;

  default:
    pageContent = <MainPage onSelectPage={setCurrentPage} />;
}

return (<div>{pageContent}</div>);

}

export default App;