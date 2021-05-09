import React, { Component } from 'react';
import NoteList from './components/NoteList/NoteList';
import RegisterForm from './components/RegisterForm/RegisterForm';
import CategoryList from './components/CategoryList/CategoryList'
import "./assets/app.css";
import "./assets/index.css";
import noteArray from './data/Notes'
import Categories from './data/Categories';

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new noteArray();
  }
 


  render() {
    return (
      <section className="content">
        <RegisterForm 
        categories={this.categories.categories} 
        createCard={this.notes.createCard} 
        />

        <main className='main-content'>
          <CategoryList 
          addCategory={this.categories.addCategory}
          categories={this.categories.categories} 
          />
          
          <NoteList
            deleteCard={this.notes.deleteCard}
            notes={
              this.notes.notes
            } 
          />
        </main>
      </section>
    );
  }
}

export default App;
