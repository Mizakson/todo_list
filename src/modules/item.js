// main item class

class Item {
    constructor(name) {
        this.name = name;
        this.status = false;
    }

    toggleStatus() {
        this.status = !this.status;
    }

};

export default Item;