import './App.css';
import About from './components/About';

import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
