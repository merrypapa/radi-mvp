$(document).ready(function(){
    $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1", function(
        data
        ){
            const suit = data.cards[0].suit;
            console.log(suit);
    });
});
