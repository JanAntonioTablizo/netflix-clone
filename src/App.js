import './App.css';
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
