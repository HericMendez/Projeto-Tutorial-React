export default class Categories {
    constructor(){
        this.cats=[];
        this._subs = [];
    }

    subscribe(func){
        this._subs.push(func)
    }

    notify(){
        this._subs.forEach(func =>{func(this.cats)});
    }
    
    addCategory(newCat){
        this.cats.push(newCat)
        this.notify();
        console.log(this.cats)
    }
}