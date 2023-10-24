import React from "react"; 
import Home from "./Components/Pages/Home/Home";
import Add from "./Components/Pages/Add/Add";
import Edit from './Components/Pages/Edit/Edit'
import  {BrowserRouter,Route,Routes} from 'react-router-dom';
const App =()=> {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Add' element={<Add />}></Route>
          <Route path='/Edit' element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
