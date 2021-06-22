import React from 'react';
import ReactDOM from 'react-dom';

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.state = { surname: '' };
    this.state = { address: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username + this.state.address + this.state.surname);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
    this.setState({surname: event.target.value});
    this.setState({address: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text' onChange={this.myChangeHandler}
      /><br/><br/>
      <input
        type='text' onChange={this.myChangeHandler}
      /><br/><br/>
      <input
        type='text' onChange={this.myChangeHandler}
      /><br/><br/>
      <input
        type='submit'
      />
      </form>
    );
  }
}
export default NewForm;
//ReactDOM.render(<NewForm />, document.getElementById('root'));