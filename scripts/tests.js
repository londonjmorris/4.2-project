(function (){

  'use strict';
var K = 10;
var Q = 10;
var J = 10;
var A = 11;
function handValue(cards){
  var hand = 0;
  for(var i = 0; i < cards.length; i++){
    hand += cards[i];
  }
  if (hand <= 21){
  return hand;
} else {
  hand = 0;
  A = 1;
  for(var i = 0; i < cards.length; i++){
    hand += cards[i];
  } return hand;

}
}
handValue([8,7,A,A]);




  Assert Function

  function assert(hand, value) {
    let output = handValue(hand);
    console.assert(output === value, `Expecting ${output} to be ${value}`);
  }

  // Blackjack Hand Tests
  // Hand, Value
  assert(["2", "2", "8"], 12);
  assert(["2", "2", "K"], 14);
  assert(["2", "Q"], 12);
  assert(["7", "J"], 17);
  assert(["7", "A"], 18);
  assert(["8", "J", "A"], 19);
  assert(["8", "A", "J"], 19);
  assert(["8", "7", "A", "A"], 17);

}());
