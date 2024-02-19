// main item class

class Item {
    constructor(name) {
        this.name = name;
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