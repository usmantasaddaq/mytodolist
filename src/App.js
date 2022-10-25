
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Components/Cards";
import Cardsdata  from './Components/CardsData';
import CardsDetail from './Components/CardsDetail';
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
<>

<Header/>
<Routes>
  <Route  path='/' element={<Cards/>}/>
  <Route  path='/cart/:id' element={<CardsDetail/>}/>
</Routes>
</>
  );
}

export default App;
