import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavLink";



/*function App() {
  return (
    <div>
      <NavBar />
      
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      
    </div>
  );
}*/

const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>} />
      <Route  path="/" element={<Home/>} />
    </Routes>
  </Router>,
  </div>
  )
}

export default App;