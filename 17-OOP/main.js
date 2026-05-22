let deck = document.getElementById("card-deck");
let htmlPlayer1 = document.getElementById("player1");
let htmlPlayer2 = document.getElementById("player2");
let cards =[];
let value = [ "A", "2", "3", "4", "5", "6", "7", "8", "9"];
let suit = ["S", "H", "D", "C"]
let player1 = new Player("Kieu My");
let player2 = new Player("Vui ve");
function taoBoBai() {
    for (let i=0; i<value.length; i++ ) {
        for (let j=0; j<suit.length; j++) {
            let card = new Card(value[i],suit[j]);
            cards.push(card);
        }
    }
    console.log(cards);
    
}
function hienThiBoBai() {
    let boBai ="";
    for (let i=0; i<cards.length; i++) {
        boBai += cards[i].getImage();
    }
    deck.innerHTML = boBai;
}
function tronBai() {
    for (let i=0; i<cards.length; i++) {
        let randomIndex = Math.floor(Math.random()*cards.length);
        let temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex]=temp;
    }
}
function lay3Card(player) {
    for (let i = 0; i<3; i++) {
        player.addCard(cards.pop());
    }
}









taoBoBai();
// hienThiBoBai();
tronBai();
// hienThiBoBai();
lay3Card(player1);
console.log(player1);
player1.getCard(htmlPlayer1);
