import {pizzas} from "./dishes/pizza.js";
import {sushi} from "./dishes/sushi.js";
import {barbecue} from "./dishes/barbecue.js";
import {khachapuri} from "./dishes/khachapuri.js";

class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    init(){
        this.model.addDishes(pizzas, sushi, barbecue, khachapuri);
        console.log(this.model.getDishes());
    }
}

export default Controller;
