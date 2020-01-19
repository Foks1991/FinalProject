class Model {
    constructor(){
        //this.dishes = [];
        this.dishesObj = {}
    }

    addDish(obj, key, value) {
        obj[key] = value;
    }
    getDishes (){
        return this.dishesObj;
    }
    clearDishes () {
        for (let key in this.dishesObj) {
            if (this.dishesObj.hasOwnProperty(key)) {
                delete this.dishesObj[key]
            }
        }
    }

}

export default Model;

