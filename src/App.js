import './App.css';
import Navbar from "./components/Navbar";
// import TextForm from "./components/getSetState";
import About from "./components/About";


function App(){
   return (
       <>
           <Navbar title={'TextUtils'} contactUs={'Contact'}/>
           {/*<TextForm heading={'Enter the text to Analyze'} initialMessage={"Let's get started"}/>*/}
           <About/>
       </>
   );
}

export default App;
