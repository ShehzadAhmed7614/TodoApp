import React from "react";
// import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Style";

class Form extends React.Component {
  state = {
    name: "",
    contact: ""
  };
  componentDidMount() {
    if (this.props.list) {
      const { name, contact } = this.props.list;
      this.setState({ name, contact });
    }
  }

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  onSubmit = e => {
    // console.log(formValues);
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    // console.log(this.props)
    return (
      <form>
        <TextField
          name="name"
          type="text"
          id="standard-basic"
          className={useStyles.textField}
          label="Enter Name"
          margin="normal"
          value={this.state.name}
          onChange={this.handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          name="contact"
          id="standard-basic"
          type="text"
          className={useStyles.textField}
          label="Enter Contact"
          margin="normal"
          style={{ width: "100%" }}
          value={this.state.contact}
          onChange={this.handleChange}
        />

        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
