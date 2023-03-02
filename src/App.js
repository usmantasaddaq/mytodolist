
import './App.css';
import React, {Component} from 'react'

import Header from './myComponent/Header';
import  {Footer}  from './myComponent/Footer';
import { Todos } from './myComponent/Todos';
import { TodoItems } from './myComponent/TodoItems';
class App extends Component {
 render(){
  return (
    <div className='f1 tc'>
    <h1>Hello World</h1>
    <p>Welcome to React</p>
    </div>
  //   <> <Header title="My Todos List" searchBar ={true}/>
  // <Footer/>
  // <Todos/>
  // <TodoItems/>
  //   </>
  );
}
}

export default App;
