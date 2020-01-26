import {pizza} from "./data/pizza.js";
import {sushi} from "./data/sushi.js";
import {barbecue} from "./data/barbecue.js";
import {khachapuri} from "./data/khachapuri.js";

class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    init(){
        this.model.addDish(this.model.getDishes(), "pizzas", JSON.parse(pizza));
        this.model.addDish(this.model.getDishes(), "sushi", JSON.parse(sushi));
        this.model.addDish(this.model.getDishes(), "barbecue", JSON.parse(barbecue));
        this.model.addDish(this.model.getDishes(), "khachapuri", JSON.parse(khachapuri));

        this.view.drawList(this.model.getDishes());
    }
}

export default Controller;
