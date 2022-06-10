import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './home/Home';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
