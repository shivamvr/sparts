import './App.css';
import Academies from './components/Academies';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {

  const tailwind = {
    btn: 'bg-blue-500 cursor-pointer  hover:bg-orange-400 text-white font-bold py-2 px-2 rounded mt-5 border'
  }

  return (
    <div className="App">
          <Navbar/>
          <Header/>
          <Academies/>
          <Feedback/>
          <Footer/>
    </div>
  );
}

export default App;
