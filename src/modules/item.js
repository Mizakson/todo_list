// main item class

class Item {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.status = false;
    }

    toggleStatus() {
        this.status = !this.status;
    }

};

export default Item;