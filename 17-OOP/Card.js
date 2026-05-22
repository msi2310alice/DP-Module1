class Card {
    constructor(_value, _suit) {
        this.value = _value;
        this.suit = _suit;
        this.image = this.value + this.suit + ".jpg";
    }
    getImage(){
        return `<img width="100px" src= images/${this.image}>`;
    }
}