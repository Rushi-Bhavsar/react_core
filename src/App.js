import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/getSetState";
// import About from "./components/About";
import {useState} from "react";
import Alert from "./components/Alert";


function App(){
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({msg: message, type: type})
        setTimeout(() => {setAlert(null)}, 1500)
    }

    const toggleMode = () => {
        if(mode === 'dark'){
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert('Light mode Enabled', 'success')
        }
        else{
            document.body.style.backgroundColor = '#042743'
            setMode('dark')
            showAlert('Dark mode Enabled', 'success')
        }
    }
    const invertMode = mode === 'light' ? 'dark' : 'light';

   return (
       <>
           <Navbar title={'TextUtils'} contactUs={'Contact'} mode={mode} toggleMode={toggleMode}
                   invertMode={invertMode}/>
           <Alert alert={alert}/>
           <TextForm heading={'Enter the text to Analyze'} initialMessage={"Let's get started"}
                     mode={mode} invertMode={invertMode} showAlert={showAlert}/>
           {/*<About/>*/}
       </>
   );
}

export default App;
