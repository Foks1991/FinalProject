import basketController from "./modals/basketController";

class View{

    static createElem ({tag, className, id, inner}) {
        const box = document.createElement(tag);
        box.classList.add(className);
        if(id){box.setAttribute("id", id);}
        if(Array.isArray(inner)) {
            for (let i = 0; i < inner.length ; i++) {
                box.append(inner[i]);
            }
        }else{
            inner && box.append(inner);
        }
        return box;
    };



    dishConstructor(imgUrl, name, price, id){

        const dishImg = View.createElem({tag : "img", className: "thing__img", id : `thing__img${id}`});
        const dishName = View.createElem({tag : "p", className: "thing__name", id : `thing__name${id}`});
        const dishPrice = View.createElem({tag : "p", className: "thing__price", id : `thing__price${id}`});
        const dishButton = View.createElem({tag : "button", className: "thing__toBasket", id : `thing__price${id}`});

        dishImg.setAttribute("src", imgUrl);
        dishName.innerText = name;
        dishPrice.innerText = `₴${price}`;
        dishButton.innerText = "Заказать";
        dishButton.addEventListener("click", (e) => {
            let elem = e.target;
            let parent = elem.parentNode;
            const name = parent.children[1].textContent;
            const price = Number(parent.children[2].textContent.slice(1));
            basketController.addToBasket(name, price);
        });

        const box = View.createElem({tag : "div", className: "thing",id : `thing__price${id}`,
                                    inner : [dishImg, dishName, dishPrice, dishButton]});
        const boxWrap = document.getElementById("dishesKitchens");
        boxWrap.append(box);
    }

    drawDishes(array){
        array.forEach(element => {
            this.dishConstructor(element.url, element.name, element.price, element.id )
        });
    }

    clearDishContainer(){
        const container = document.getElementById("container__dishesKitchens");
        const boxWrap = document.getElementById("dishesKitchens");
        boxWrap.remove();
        const newBoxWrap = View.createElem({tag : "div", className: "dishesKitchens", id : "dishesKitchens"});
        container.append(newBoxWrap);
    }

    drawList (dishesList) {
        const dishes = document.getElementsByClassName('menu__dishes');
        for (let i = 0; i < dishes.length; i++) {
            dishes[i].addEventListener("click", (e) => {
                    this.clearDishContainer();
                    let elem = e.target;
                    let dishId = elem.getAttribute('id');

                    if(dishId === "allDishes"){
                        for (let key in dishesList) {
                            if (dishesList.hasOwnProperty(key)) {
                                this.drawDishes( dishesList[key] );
                            }
                        }
                    }else{
                        this.drawDishes( dishesList[dishId] );
                    }
            })
        }
    }
}

export default View;

