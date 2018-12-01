$(document).ready(function(){

    console.log('Is this a thing yet?')



    // declare a players related variables
    var playerX = ('x');
    var playerO = ('o');
    var nameX = getNameX();
    var nameO = getNameO();
    var takeTurns = 0; //turn for who playes
    var scoreX = 0;
    var scoreO = 0;
    var winX = 0;
    var winO = 0;


    
    function getNameX() {
        var nameX = prompt('What is your name?');
        $('#nameX1').text(nameX);    
        return nameX;
    };
      
    function getNameO() {
        var nameO = prompt('What is your name?');
        $('#nameO2').text(nameO);
        return nameO;
    };

    
    
      

    $('#gameBoard tr td').on('click', function(){
        if (takeTurns%2 == 0){
            takeTurns++;
            $(this).text(playerX);
            $(this).addClass('x');
            if (checkWinner() == 'x'){
                alert (`${nameX} WON!!`);
                takeTurns = 0;
            } 
        } else {
            takeTurns++;
            $(this).text(playerO);
            $(this).addClass('o');
            if (checkWinner() == 'o'){
                alert (`${nameO} WON!!`);
                takeTurns = 0;
            }
        }
    });

    
    function checkWinner(){
        if ($('#c1').hasClass('x') && $('#c2').hasClass('x') && $('#c3').hasClass('x') ||
        $('#c4').hasClass('x') && $('#c5').hasClass('x') && $('#c6').hasClass('x') || 
        $('#c7').hasClass('x') && $('#c8').hasClass('x') && $('#c9').hasClass('x') || 
        $('#c1').hasClass('x') && $('#c4').hasClass('x') && $('#c7').hasClass('x') ||
        $('#c2').hasClass('x') && $('#c5').hasClass('x') && $('#c8').hasClass('x') ||
        $('#c3').hasClass('x') && $('#c6').hasClass('x') && $('#c9').hasClass('x') ||
        $('#c1').hasClass('x') && $('#c5').hasClass('x') && $('#c9').hasClass('x') || 
        $('#c3').hasClass('x') && $('#c5').hasClass('x') && $('#c7').hasClass('x')){
            alert (`${nameX} WON!!`);
        } else if ($('#c1').hasClass('o') && $('#c2').hasClass('o') && $('#c3').hasClass('o') ||
        $('#c4').hasClass('o') && $('#c5').hasClass('o') && $('#c6').hasClass('o') || 
        $('#c7').hasClass('o') && $('#c8').hasClass('o') && $('#c9').hasClass('o') || 
        $('#c1').hasClass('o') && $('#c4').hasClass('o') && $('#c7').hasClass('o') ||
        $('#c2').hasClass('o') && $('#c5').hasClass('o') && $('#c8').hasClass('o') ||
        $('#c3').hasClass('o') && $('#c6').hasClass('o') && $('#c9').hasClass('o') ||
        $('#c1').hasClass('o') && $('#c5').hasClass('o') && $('#c9').hasClass('o') || 
        $('#c3').hasClass('o') && $('#c5').hasClass('o') && $('#c7').hasClass('o')){
            alert (`${nameO} WON!!`); 
        } else if (takeTurns == 9) {
            alert ("It's a TIE game!!");
            takeTurns = 0;  
        }
    };
    

    


    //Restart the game and keep the score

    //Start a new game with new players, new score
    $('#newGame').on('click', function() {
        window.location.reload(true);
    });




});
