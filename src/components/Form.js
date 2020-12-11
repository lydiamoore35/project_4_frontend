import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    task: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("working");
    event.preventDefault();

    const { task } = this.state;
    const checklist = {
      task: task
    };
    console.log(task)

    if (this.props.checklist) checklist.id = this.props.checklist.id;

    this.props.handleSubmit(event, checklist);
  };

  componentDidMount() {
    if (this.props.checklist) {
      const { task } = this.props.checklist;
      this.setState({
        task: task || ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"task"}
          placeholder={"Task Description"}
          type={"text"}
          value={this.state.task}
          id={"task"}
        />
        <input
          type="submit"
          value={this.props.checklist ? "update this task" : "add a task"}
        />
      </form>
    );
  }
}

export default Form;