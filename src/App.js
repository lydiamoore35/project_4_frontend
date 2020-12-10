// import logo from './logo.svg';
import Header from './components/Header.js'
import Time from './components/Time.js'
import Goal from './components/Goal.js'
import Appointments from './components/Appointments.js'
import Checklist from './components/Checklist.js'
import Errands from './components/Errands.js'
import Checkin from './components/Checkin.js'
import Footer from './components/Footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Time />
      <Goal />
      <Checklist />
      <Errands />
      <Appointments />
      <Checkin />
      <Footer />
    </div>
  );
}

export default App;
