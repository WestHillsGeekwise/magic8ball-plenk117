var fortune = document.getElementById("fortune");


var fortune = document.getElementById("fortune");

var rainbow = ["url('http://planetoftheweb.com/i/8ball/0.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/1.png') no-repeat fixed center black", "url(http://planetoftheweb.com/i/8ball/2.png) no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/3.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/4.png') no-repeat fixed center black",
"url('http://planetoftheweb.com/i/8ball/5.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/6.png') no-repeat fixed center black","url('http://planetoftheweb.com/i/8ball/7.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/8.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/9.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/10.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/11.png') no-repeat fixed center black",
"url('http://planetoftheweb.com/i/8ball/12.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/13.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/14.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/15.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/16.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/17.png') no-repeat fixed center black", "url('http://planetoftheweb.com/i/8ball/18.png') no-repeat fixed center black",
"url('http://planetoftheweb.com/i/8ball/19.png') no-repeat fixed center black"];

function change() {
 var background = Math.floor(19*Math.random());
 document.body.style.background = rainbow[background];
}

function text() {
  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";
}


fortune.addEventListener("click", change);
fortune.addEventListener("click", text);// add all your js here
