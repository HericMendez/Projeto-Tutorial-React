import React, { Component } from 'react';
import NoteList from './components/NoteList/NoteList';
import RegisterForm from './components/RegisterForm/RegisterForm';
import CategoryList from './components/CategoryList/CategoryList'
import "./assets/app.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
    };
  }

  createCard(title, text) {
    const newCard = { title, text };
    const NewArrayOfCards = [...this.state.notes, newCard];
    const newState = {
      notes: NewArrayOfCards,
    };
    this.setState(newState);
  }

  addCategory(catName){
    const NewArrayOfCats = [...this.state.categories, catName]
    const newState =  {...this.state, categories:NewArrayOfCats}
    this.setState(newState)
  }

  deleteCard(index) {
    let arrayOfCards = this.state.notes;
    arrayOfCards.splice(index, 1);
    this.setState({ notes: arrayOfCards });

    console.log("delete");
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createCard={this.createCard.bind(this)} />
        <main className='main-content'>
          <CategoryList 
          addCategory={this.addCategory.bind(this)}
          categories={this.state.categories} 
          />
          <NoteList
            deleteCard={this.deleteCard.bind(this)}
            notes={
              this.state.notes    
            } 
          />
        </main>
      </section>
    );
  }
}

export default App;
