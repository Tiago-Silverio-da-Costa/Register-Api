import './App.scss'
import { Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Register'
function App() {


  return <>
  <Routes>
    <Route path="/" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>

  </>
}

export default App;
