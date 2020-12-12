// models to be added later //
// import Errands from './components/Errands.js'
// import Appointments from './components/Appointments.js'
import React from 'react'
import Header from './components/Header.js'
import Definition from './components/Definition.js'
import Time from './components/Time.js'
import Goal from './components/Goal.js'
import Checklists from './components/Checklists.js'
import Checkin from './components/Checkin.js'
import Footer from './components/Footer.js'
import './App.css';

class App extends React.Component {
  state = {
    checklists: [],
    taskValue: ""
  };

  handleTaskChange = (event) => {
    console.log(event.target.value)
    this.setState({taskValue:event.target.value})
  }

  handleAdd = (event) => {
    event.preventDefault();
    const formInput = {task:this.state.taskValue}
    fetch("https://adulting-moore-api.herokuapp.com/checklists", {
      body: JSON.stringify(formInput),
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
    fetch(`https://adulting-moore-api.herokuapp.com/checklists/${deletedChecklist.id}`, {
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
    fetch(`https://adulting-moore-api.herokuapp.com/checklists/${formInputs.id}`, {
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
    fetch('https://adulting-moore-api.herokuapp.com/checklists')
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
        <form onSubmit= {this.handleAdd}>
          <input className="text" type="text" value={this.state.taskValue}
          onChange={this.handleTaskChange}/>
          <input className="submit" type="submit" value="Add Task"/>
        </form>
        <Definition />
        <Time />
        <Goal />
        <Checklists 
        checklists={this.state.checklists}
         handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        <Checkin />
        <Footer />
      </div>
    </>
    );
  }
}

export default App;
