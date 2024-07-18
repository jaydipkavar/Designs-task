/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Signup1 from "./components/SignupPages/Signup1";
import Signup2 from "./components/SignupPages/Signup2";
import Signup3 from "./components/SignupPages/Signup3";
import Signup4 from "./components/SignupPages/Signup4";
import Signup5 from "./components/SignupPages/Signup5";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/singup1' element={<Signup1 />}></Route>
          <Route path='/singup2' element={<Signup2 />}></Route>
          <Route path='/singup3' element={<Signup3 />}></Route>
          <Route path='/singup4' element={<Signup4 />}></Route>
          <Route path='/singup5' element={<Signup5 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
