import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catagory from './Components/Catagory/Catagory';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals'
import Nothing from './Components/Nothing/Nothing';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Meals></Meals>}></Route>
        <Route path="/home" element={<Meals></Meals>}></Route>
        <Route path="/catagory" element={<Catagory></Catagory>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
        <Route path='*' element={<Nothing></Nothing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
