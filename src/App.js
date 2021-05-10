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
        categories={this.categories.cats} 
         /*this.categories(objeto da classe Categories)
          .cats(atributo da classe Categories))*/
        createCard={this.notes.createCard} //erro
        />

        <main className='main-content'>
          <CategoryList 
          addCategory={this.categories.addCategory.bind(this.categories)}
          categories={this.categories} 
         
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
