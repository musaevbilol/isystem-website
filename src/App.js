import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import BizHaqimizda from './pages/BizHaqimizda';
import Boglanish from './pages/Boglanish';
import Kirish from './pages/Kirish';
import Online from './pages/Online';
import "./App.css";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<Online/>}/>
    <Route path="/bog'lanish"  element={<Boglanish/>}/>
    <Route path="/kirish"  element={<Kirish/>}/>
    <Route path="/bizhaqimizda"  element={<BizHaqimizda/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
