import React from "react";
import Form from "./Form.js";

class Checklist extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, checklist) => {
    console.log("update running");
    this.props.handleUpdate(event, checklist);
    this.toggleForm();
  };

  render() {
    const { checklist, handleDelete } = this.props;

    return (
      <>
        {this.state.formVisible ? (
          <Form
            checklist={checklist}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="checklist">
            <h1>Task:</h1>
            <button handleSubmit={this.handleSubmit}>Add Task</button>
            <h3>{checklist.task}</h3>
            <button onClick={() => handleDelete(checklist)}>Delete task</button>
            <button onClick={this.toggleForm}>Edit this task</button>
          </div>
        )}
      </>
    );
  }
}

export default Checklist;