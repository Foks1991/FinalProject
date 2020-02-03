class Model {
    constructor(){
        this.storage = [];
        this.filteredStorage = [];
    }

    getStorage (){return this.storage}
    getFilteredStorage(){return this.filteredStorage}

    setStorage (dishes){this.storage = dishes}
    setFilteredStorage (dishes){this.filteredStorage = dishes}
}

export default Model;

