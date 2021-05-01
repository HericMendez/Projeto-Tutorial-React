import React, { Component } from "react";
import './form.css'

class RegisterForm extends Component {
  constructor(){
    super();
    this.title="";
  }
  handleTitleChange(event){
    console.log(this.title)
    this.title = event.target.value;
  }
  render() {
    return (
      <form className='form-register'>
        
        <input
         type="text" 
         placeholder="Title"
         className='form-register_input'
         onChange={this.handleTitleChange.bind(this)}
          />
        <textarea 
        rows={15}
        placeholder="What are your thoughts?"
        className='form-register_input'
         />
        <button className='form-register_input form-register_submit'>
          Enter
        </button>
      </form>
    );
  }
}

export default RegisterForm;
