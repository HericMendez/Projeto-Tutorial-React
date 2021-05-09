export default class noteArray{
    constructor(){
        this.notes = [];
    }
    addCard(title, text, category){
        const newNote =  new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleteCard(index){
        this.notes.splice(index, 1);
    }
}

class Note{
    constructor(title, text, category){
        this.title=title;
        this.text=text;
        this.category=category;
    }
}