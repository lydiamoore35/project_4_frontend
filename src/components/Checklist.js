import React from "react";
import Form from "./Form.js";

class Checklist extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleAdd = (event, checklist) => {
    console.log('first step')
    console.log(event.target)
    this.props.handleAdd(event, checklist);
    this.toggleForm();
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