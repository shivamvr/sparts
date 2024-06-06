import './App.css';
import Academies from './components/Academies';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Header />
      <Academies />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
