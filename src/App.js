import './App.css';
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
