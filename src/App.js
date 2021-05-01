import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import './assets/app.css'
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createCard(title, text){
    const newCard = {title, text};
    const NewArrayOfCards =[...this.state.notes, newCard]
    const newState = {
      notes: NewArrayOfCards
    }
    this.setState(newState)

  }
  render() {
    return (
      <section className='content'>
        <RegisterForm createCard={this.createCard.bind(this)} />
        <NoteList notes={this.state.notes} /*notes={this.notes} is the same as new NoteList*//>
      </section>
    );
  }
}

export default App;
