

function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello "+ response + ", have a nice day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,20));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "red";
}