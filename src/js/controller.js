class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    init(){
        const getDishesByKey = (arr, key) => {
            return arr.filter( (e) => {
                return e.type === key;
            });
        };

        const getDishesFromServer = () => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/dishes", true);
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    for (let i = 0; i < this.model.getDishesKeys().length; i++) {
                        this.model.addDish(this.model.getDishes(), `${this.model.getDishesKeys()[i]}`, getDishesByKey(JSON.parse(xhr.response), `${this.model.getDishesKeys()[i]}`));
                    }
                    this.view.drawList(this.model.getDishes());
                }
            };
        };

        getDishesFromServer();
    }
}

export default Controller;
