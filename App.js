
import './App.css';
import { Navbar } from './component/Navbar/Navbar';


import { Routes,Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Goto } from './GOTO/Goto';
import { Footer } from './component/Footer/Footer';








function App() {
  return (
   <>

  
    
   <div  className='app'>
   <Navbar/>

  
 

  

 
   <Routes>
                <Route path='/' element = {<Home></Home>}></Route>
               
                
                
             
            </Routes>
      
   
     
  
          <Goto/>



   </div>
   
   </>
  );
}

export default App;
