import './App.css';
import Header from "./Components/Header/Header.jsx"
import Home from "./Components/Home/Home.jsx"
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './Components/Home/About';
import Mission from './Components/Home/Mission';
import Projects from "./Components/Home/Projects"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/mission' element={< Mission />}></Route>
        <Route exact path='/projects' element={< Projects />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
