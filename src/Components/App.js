import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, {useState} from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1000);
  }

  const toggleMode = () =>{
    if (mode ==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled.", "success");
      document.title = "TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - It's an amazing app";
      // }, 1000);
    } 
    else{ 
      setMode('dark');
      document.body.style.backgroundColor = '#1e2061';
      showAlert("Dark Mode Enabled.", "success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Please install now!!";
      // }, 1500);
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading = "Enter the Text here to analyze" mode = {mode} toggleMode = {toggleMode}
          showAlert = {showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
