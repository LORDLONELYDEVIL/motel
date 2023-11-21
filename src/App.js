
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navb';
import Wal from './Components/Wal';
import Cont from './Components/Cont';
import Cards from './Components/Cards';
import Grids from './Components/Grids';
import Rp from './Components/Rp';
import Cards2 from './Components/Cards2';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
       <Navb />
       <Wal /><br></br>
        <section name="Cont">
         <Cont  />

        </section>
        <section name='Cards'>
            <Cards/><br></br>

       </section>
       <section name='Register'>
          <Rp/><br></br>
        
       </section>
       <section name='Contact'>
           <Contact/>
        
       </section>
       
       
       
      
      
       
       
      
      
    </div>
  );
}

export default App;
