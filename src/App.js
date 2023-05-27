import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js'
import Interests from './components/Interests'
import Footer from './components/Footer.js'
import About from './components/About.js'

function App() {
  return (
    <div className="card">
      <Main />
      <div className="container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
