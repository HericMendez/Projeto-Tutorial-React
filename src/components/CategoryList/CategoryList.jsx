import React, { Component } from "react";
import "./category.css";

class CategoryList extends Component {

  componentDidMount(){
    this.props.categories.subscribe(this._newCategories.bind(this));
  }

  _newCategories(categories){
    console.log(categories)
  }


  _handleInputEvent(e){
    if(e.key=='Enter'){
      let catValue = e.target.value;
      this.props.addCategory(catValue);
    }
  }
  render() { 
    return (
      <section className='category-list'>
        <ul className='category-list_list'>
            {this.props.categories.cats.map((category, index)=>{
            
               if(category!=''){
                 return <li 
                 key={index} 
                 className='category-list_item'>
                   {category}
                </li>
                }
            })}
          

        </ul>
        <input 
        type="text" 
        className='category-list_input' 
        placeholder='Add a Category...'
        onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
