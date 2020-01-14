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
        /*this.model.addDishes(pizza, sushii, bbq, khachapurii);
       for (let i = 0; i < this.model.getDishes().length; i++) {
           this.view.drawDishes(this.model.getDishes()[i]);
       }*/
        const dishesObj = this.model.getDishesObj();
        this.model.addDishToObj(dishesObj, "pizzas", JSON.parse(pizza));
        this.model.addDishToObj(dishesObj, "sushi", JSON.parse(sushi));
        this.model.addDishToObj(dishesObj, "barbecue", JSON.parse(barbecue));
        this.model.addDishToObj(dishesObj, "khachapuri", JSON.parse(khachapuri));
        console.log(dishesObj);

        this.view.drawList(dishesObj);
    }

}

export default Controller;
