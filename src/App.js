// import logo from './logo.svg';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Appointments from './components/Appointments.js'
import Checklist from './components/Checklist.js'
import Errands from './components/Errands.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Checklist />
      <Errands />
      <Appointments />
      <Footer />
    </div>
  );
}

export default App;
