class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
   for (let i = arr.lenght; i < arr.length; i--){

   }
    
  }

  checkIfPair(card1, card2) {
      this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true 
    }else {
     
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
  if (this.pairsGuessed === this.cards.length / 2){
    return true
  } else {
    return false
  }
}
}
