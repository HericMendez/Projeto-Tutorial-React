import React, { Component } from "react";
import './form.css'

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.title="";
    this.text="";
  }
  _handleTitleChange(event){
    this.title = event.target.value;
    console.log(this.title)
  }

  _handleTextChange(event){
    this.text = event.target.value;
  }

  _createCard(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.text);
    console.log(`New note added! \n${this.title} \n${this.text}`)
    
  }

  render() {
    return (
      <form className='form-register' onSubmit={this._createCard.bind(this)}>
        <h1>My Notes</h1>
        <input
         type="text" 
         placeholder="Title"
         className='form-register_input'
         onChange={this._handleTitleChange.bind(this)}
          />
        <textarea 
        rows={15}
        placeholder="What are your thoughts?"
        className='form-register_input'
        onChange={this._handleTextChange.bind(this)}
         />
        <button className='form-register_input form-register_submit'>
          Enter
        </button>
      </form>
    );
  }
}

export default RegisterForm;
