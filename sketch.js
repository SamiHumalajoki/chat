function setup() {
          var cnv = createCanvas(1000, 800);
          frameRate(20);
          background(51);
}

$(function () {
        
    var socket = io.connect('https://samis-chat.herokuapp.com');
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
      window.scrollTo(0, document.body.scrollHeight);
    });
});
