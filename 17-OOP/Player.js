class Player {
    constructor(_name){
        this.name = _name;
        this.card = [];
    }
    addCard(_card){
        this.card.push(_card);
    }
    getCard(_html){
        let str ="";
        for (let i=0; i<this.card.length; i++) {
            str += this.card[i].getImage();
        }
        _html.innerHTML = str;
    }
}