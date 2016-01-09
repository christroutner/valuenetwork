//Global Variables
serverIp = "192.168.56.101";
serverPort = "8000";

$(document).ready( function() {

  var debugtrue = false;

  debugger;
  
  if(debugtrue) {
    $.getJSON('http://'+serverIp+':'+serverPort+'/api/people/?format=json', '', function (data) {
      debugger;
    });
  }
  
});