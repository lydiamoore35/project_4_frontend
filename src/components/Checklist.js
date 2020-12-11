
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
            <h1>Checklist:</h1>
            <h3>{checklist.task}</h3>
            <button onClick={() => handleDelete(checklist)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Checklist;