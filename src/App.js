import './App.css';
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
