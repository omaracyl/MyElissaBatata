

var audio         = new Audio('FF6finger.wav');
var victorySong   = new Audio('Victory_Fanfare.mp3');
var gameOverSong  = new Audio('Game_Over.mp3');
victorySong.loop  = true;
gameOverSong.loop = true;


$('#yes').click(function(){
    // to play finger sound
    audio.play();
    
    
        
    // Move finger
    $("#hand").css('left', 415);

    // Show win sprite
    $('.win').show();
    $('.stand').hide();
    $('.dead').hide();

    victorySong.play();
    gameOverSong.pause();

    emailjs
        .sendForm('service_to8lro8', 'template_5rw3skt', form.current, 'WWYiuppQcMmddOg9C');


});

$('#no').click(function(){
    // to play finger sound
    audio.play();

    // Move finger
    $("#hand").css('left', 575);

    // Show win sprite
    $('.dead').show();
    $('.stand').hide();
    $('.win').hide();

    victorySong.pause();
    gameOverSong.play();
});









