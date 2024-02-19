// main item class

class Item {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.status = false;
    }

    editName(name) {
        name = this.name;
    }

    toggleStatus() {
        this.status = !this.status;
    }

};

export default Item;