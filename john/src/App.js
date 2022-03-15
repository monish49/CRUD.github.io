import {Routes,Route} from 'react-router-dom'
import './App.css'; 
import Home from './crud-project/home';
import Update from './crud-project/update';


function App  () {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/update' element={<Update/>}/>
      </Routes>
      
      </div>

  );
}
export default App;


