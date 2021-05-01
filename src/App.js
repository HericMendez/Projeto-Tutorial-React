import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import './assets/app.css'
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className='content'>
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;