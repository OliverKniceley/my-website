
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const YesButton = document.getElementById('YesButton');
  YesButton.addEventListener('click', function() {
    document.getElementById('MainText').innerText = "YAYYYYYYYY";
    document.getElementById('YesLoveText').style.display = "block";
    document.getElementById('NoFunnyText').innerText = "YOUR MY VALENTINE NOW"
  });
  
  const NoButton = document.getElementById('NoButton');
  const FunnyTexts = ["You cant say no.", "You have to say yes!", "Im sorry but its a yes!", "Click yes.", "SAY YES!","You cant say no (You owe me $25)","CLICK YESSS","Click yes right now","Nope, you wanna click yes."];
  NoButton.addEventListener('click', function() {
    document.getElementById('NoFunnyText').innerText = FunnyTexts[getRandomInt(FunnyTexts.length)];
  });
  
  document.getElementById("YesLoveText").style.display = "none";
  