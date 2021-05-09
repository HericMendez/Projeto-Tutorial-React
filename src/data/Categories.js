export default class Categories {
    constructor(){
        this.categories=[];
    }

    addCategory(newCat){
        console.log(this.categories)

        this.categories.push(newCat)
    }
}