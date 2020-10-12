function writeSomething(damage,attackType){
  var ele = document.createElement("div");
  ele.innerHTML=damage+" "+attackType;
  
  document.body.appendChild(ele);
}

for(var i=0; i<3; i++){
writeSomething("Dragon's Damage Counter", 0);
}

document.body.querySelector(".button").addEventListener("click", function(){
writeSomething("Dragon", "health");
});

document.body.querySelector(".button2").addEventListener("click", function(){
writeSomething("Dragon", "ice");
});

document.body.querySelector(".button3").addEventListener("click", function(){
writeSomething("Dragon", "poison");
});