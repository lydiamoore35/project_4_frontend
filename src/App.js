import React from 'react'
import Header from './components/Header.js'
import Time from './components/Time.js'
import Goal from './components/Goal.js'
import Appointments from './components/Appointments.js'
import Checklists from './components/Checklists.js'
import Errands from './components/Errands.js'
import Checkin from './components/Checkin.js'
import Footer from './components/Footer.js'
import './App.css';

class App extends React.Component {
  state = {
    checklists: [],
  };

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3000/checklists", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdChecklist) => createdChecklist.json())
      .then((jsonedChecklist) => {
        this.setState({
          checklists: [jsonedChecklist, ...this.state.checklists],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedChecklist) => {
    fetch(`http://localhost:3000/checklists/${deletedChecklist.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const checklists = this.state.checklists.filter(
          (checklist) => checklist.id !== deletedChecklist.id
        );
        this.setState({ checklists });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    console.log("you got this");
    fetch(`http://localhost:3000/checklists/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedChecklist) => {
        this.getChecklists();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getChecklists()
  }
  getChecklists = () => {
    fetch('http://localhost:3000/checklists')
      .then(response => response.json())
      .then(json => this.setState({checklists: json}))
      .catch(error => console.error(error))
  }

  render(){
    return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet"></link>
      <div className="App">
        <Header />
        <Time />
        <Goal />
        <Checklists 
        checklists={this.state.checklists}
        handleSubmit={this.handleAdd}  handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        <Errands />
        <Appointments />
        <Checkin />
        <Footer />
      </div>
    </>
    );
  }
}

export default App;
