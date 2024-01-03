import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import { Route, Routes, } from 'react-router-dom';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    //10
    <>
      <NoteState>
        <NavBar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
            <Route exact path="/about" element={<About showAlert={showAlert} />}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </NoteState >
    </>
  );
}

export default App;
