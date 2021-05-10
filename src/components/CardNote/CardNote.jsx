import React, { Component } from 'react';
import './card.css'
import {ReactComponent as DeleteSVG} from '../../assets/delete.svg'

class CardNote extends Component {
  erase(){
    const cardIndex = this.props.cardIndex;
    this.props.deleteCard(cardIndex);
  }
  render() {
    return (
      <section className='card-note'>
        <header className='card-note_header'>
          <h3 className='card-note_title'>{this.props.title}&nbsp;&nbsp;</h3>
          
          <h6>{this.props.category}&nbsp;&nbsp;</h6>
          <DeleteSVG onClick={this.erase.bind(this)}/>
        </header>
        <p className='card-note_content'>{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
