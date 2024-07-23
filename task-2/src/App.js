/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Signup1 from "./components/SignupPages/Signup1";
import Signup2 from "./components/SignupPages/Signup2";
import Signup3 from "./components/SignupPages/Signup3";
import Signup4 from "./components/SignupPages/Signup4";
import Signup5 from "./components/SignupPages/Signup5";
import Login1 from "./components/LoginPages/Login1";
import Login2 from "./components/LoginPages/Login2/index2";
import Login3 from "./components/LoginPages/Login3/index3";
import Login4 from "./components/LoginPages/Login4/index4";
import Login5 from "./components/LoginPages/Login5";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/signup1' element={<Signup1 />}></Route>
          <Route path='/signup2' element={<Signup2 />}></Route>
          <Route path='/signup3' element={<Signup3 />}></Route>
          <Route path='/signup4' element={<Signup4 />}></Route>
          <Route path='/signup5' element={<Signup5 />}></Route>
          <Route path='/Login1' element={<Login1 />}></Route>
          <Route path='/Login2' element={<Login2 />}></Route>
          <Route path='/Login3' element={<Login3 />}></Route>
          <Route path='/Login4' element={<Login4 />}></Route>
          <Route path='/Login5' element={<Login5 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
