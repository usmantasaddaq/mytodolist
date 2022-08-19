
import './App.css';
import Header from './myComponent/Header';
import  {Footer}  from './myComponent/Footer';
import { Todos } from './myComponent/Todos';
import { TodoItems } from './myComponent/TodoItems';

function App() {
 let todos =[{
  sno:1,title:"Go to the market",
  desc:"You need to go the market to get this job done"
 },{
  sno:2,title:"Go to the mall",
  desc:"You need to go the market to get this job done"
 },{
  sno:3,title:"Go to the ghat",
  desc:"You need to go the market to get this job done"
 }]

  return (
    <>
     <Header title="My Todos List" searchBar ={true}/>
  <Footer/>
  <Todos/>
  <TodoItems/>
    </>
  );
}

export default App;
