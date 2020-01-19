import {pizza} from "./dishes/pizza.js";
import {sushi} from "./dishes/sushi.js";
import {barbecue} from "./dishes/barbecue.js";
import {khachapuri} from "./dishes/khachapuri.js";

class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    init(){
        const dishesList = this.model.getDishes();
        this.model.addDish(dishesList, "pizzas", JSON.parse(pizza));
        this.model.addDish(dishesList, "sushi", JSON.parse(sushi));
        this.model.addDish(dishesList, "barbecue", JSON.parse(barbecue));
        this.model.addDish(dishesList, "khachapuri", JSON.parse(khachapuri));

        this.view.drawList(dishesList);
    }

}

export default Controller;
