export default class noteArray{
    constructor(){
        this.notes = [];
        this._subs = [];
    }

    addCard(title, text, category){
        const newNote =  new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteCard(index){
        this.notes.splice(index, 1);
        this.notify();
    }

    subscribe(func){
        this._subs.push(func)
    }

    notify(){
        this._subs.forEach(func =>{func(this.notes)});
    }
}

class Note{
    constructor(title, text, category){
        this.title=title;
        this.text=text;
        this.category=category;
    }
}