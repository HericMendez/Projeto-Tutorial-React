import React, { Component } from "react";
import './form.css'

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.title="No Title";
    this.text="";
    this.category="No Category"
    this.state={categories:[]}
  }

  componentDidMount(){
    this.props.categories.subscribe(this._newCategories.bind(this));
  }

  _newCategories(categories){
    this.setState({...this.state, categories})
  }

  _handleTitleChange(event){
    this.title = event.target.value;
    console.log(this.title);
    if(this.title=='') {this.title='No Title'}
  }

  _handleCategoryChange(event){
      event.stopPropagation();
      this.category = event.target.value;
  }

  _handleTextChange(event){
    this.text = event.target.value;
  }

  _createCard(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.text, this.category);
    //console.log(`New note added! \n${this.title} \n${this.text}`)
    
  }


  render() {
    return (
      
      <form className='form-register' onSubmit={this._createCard.bind(this)}>
        <h2>My Notes</h2>
        <select onChange={this._handleCategoryChange.bind(this)} className='form-register_input'>
          <option>No Category</option>
            {this.state.categories.map((category, index) =>{
              return <option key={index}>{category}</option>
            })}
        </select>
        
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
