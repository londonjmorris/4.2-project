/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
    var total = 0;
    var aces = 0;

    // total all cards except your aces with a for loop
    for(var i = 0; i < hand.length; i++){
      if( hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
        total += 10;
      } else if (hand[i] === "A") {
        // increment aces variable by one if ace if found / counting the number of aces
        aces ++;
      } else {
        total += Number(hand[i]);
      }
    }
        // determine value of ace based on total in hand based off non ace cards.
    for(var i = 0; i < aces; i++){
      if (total <= 10){
        total += 11;
      } else {
        total ++;
      }
    }


    // for(var i = 0; i < hand.length; i++){
    //   // hand += cards[i];
    // }
  //   if (hand <= 21){
  //   return hand;
  // } else {
  //   hand = 0;
  //   A = 1;
  //   for(var i = 0; i < cards.length; i++){
  //     hand += cards[i];
  //   } return hand;

  // }

  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

// var K = 10;
// var Q = 10;
// var J = 10;
// var A = 11;
// function handValue(cards){

// }
