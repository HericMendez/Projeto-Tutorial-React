import React, { Component } from "react";
import './card.css'

class CardNote extends Component {
  state = {};
  render() {
    return (
      <section className='card-note'>
        <header className='card-note_header'>
          <h3 className='card-note_title'>Title</h3>
        </header>
        <p className='card-note_content'>List Item </p>
      </section>
    );
  }
}

export default CardNote;
