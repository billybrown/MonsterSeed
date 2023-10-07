

var monster = document.getElementById("monster");
var monsterSprite = document.getElementById("monsterSprite");
var monsterFood = document.getElementById("monsterFood");
var farm = document.getElementById("farm");
var counter = document.getElementById("counter");
var counterNumber = 0;

var parcelBarren1 = '<div class="parcel barren"><img src="img/Barren1.svg"/></div>';
var parcelBarren2 = '<div class="parcel barren"><img src="img/Barren2.svg"/></div>';
var parcelBarren3 = '<div class="parcel barren"><img src="img/Barren3.svg"/></div>';
var parcelCrop = '<div class="parcel crop"><div class="flower flower1"><button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/></button><div class="dustwrap"><img class="dust dust1" src="img/Dust1.svg"/><img class="dust dust2" src="img/Dust2.svg"/><img class="dust dust3" src="img/Dust3.svg"/><img class="dust dust4" src="img/Dust4.svg"/><img class="dust dust5" src="img/Dust5.svg"/><img class="dust dust6" src="img/Dust6.svg"/><img class="dust dust7" src="img/Dust7.svg"/><img class="dust dust8" src="img/Dust8.svg"/><img class="dust dust9" src="img/Dust9.svg"/><img class="dust dust10" src="img/Dust10.svg"/><img class="dust dust11" src="img/Dust11.svg"/><img class="dust dust12" src="img/Dust12.svg"/><img class="dust dust13" src="img/Dust13.svg"/></div></div><div class="flower flower3">  <button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/>  </button>  <div class="dustwrap">    <img class="dust dust1" src="img/Dust1.svg"/>    <img class="dust dust2" src="img/Dust2.svg"/>    <img class="dust dust3" src="img/Dust3.svg"/>    <img class="dust dust4" src="img/Dust4.svg"/>    <img class="dust dust5" src="img/Dust5.svg"/>    <img class="dust dust6" src="img/Dust6.svg"/>    <img class="dust dust7" src="img/Dust7.svg"/>    <img class="dust dust8" src="img/Dust8.svg"/>    <img class="dust dust9" src="img/Dust9.svg"/>    <img class="dust dust10" src="img/Dust10.svg"/>    <img class="dust dust11" src="img/Dust11.svg"/>    <img class="dust dust12" src="img/Dust12.svg"/>    <img class="dust dust13" src="img/Dust13.svg"/>  </div></div><div class="flower flower2">  <button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/>  </button>  <div class="dustwrap">    <img class="dust dust1" src="img/Dust1.svg"/>    <img class="dust dust2" src="img/Dust2.svg"/>    <img class="dust dust3" src="img/Dust3.svg"/>    <img class="dust dust4" src="img/Dust4.svg"/>    <img class="dust dust5" src="img/Dust5.svg"/>    <img class="dust dust6" src="img/Dust6.svg"/>    <img class="dust dust7" src="img/Dust7.svg"/>    <img class="dust dust8" src="img/Dust8.svg"/>    <img class="dust dust9" src="img/Dust9.svg"/>    <img class="dust dust10" src="img/Dust10.svg"/>    <img class="dust dust11" src="img/Dust11.svg"/>    <img class="dust dust12" src="img/Dust12.svg"/>    <img class="dust dust13" src="img/Dust13.svg"/>  </div></div><img class="stem" src="img/Plant1.svg"/></div>';

var maxParcels = Math.ceil(window.innerWidth / 72);
farm.style.width = (maxParcels * 72) + 'px';


for (var i = 0; i < maxParcels; i++) {
    var random = getRandomInt(4) + 1;
    if (random == 4) {
        farm.innerHTML += parcelCrop;
    } else {
        farm.innerHTML += '<div class="parcel barren"><img src="img/Barren' + random + '.svg"/></div>';
    }
}

var randomMonster = getRandomInt(3) + 1;
monsterSprite.innerHTML = '<img class="monster__breath1" src="img/M' + randomMonster + '_1.svg" /><img class="monster__breath2" src="img/M' + randomMonster + '_2.svg" /><img class="monster__open" src="img/M' + randomMonster + '_3.svg" /><img class="monster__closed" src="img/M' + randomMonster + '_4.svg" />';


var test = `
      <div class="parcel barren">
        <img src="img/Barren1.svg"/>
      </div>
      <div class="parcel barren">
        <img src="img/Barren2.svg"/>
      </div>
      <div class="parcel crop">
        <div class="flower flower1">
          <button class="bloomwrap">
            <img class="bloom" src="img/Plant1_Flower1.svg"/>
          </button>
          <div class="dustwrap">
            <img class="dust dust1" src="img/Dust1.svg"/>
            <img class="dust dust2" src="img/Dust2.svg"/>
            <img class="dust dust3" src="img/Dust3.svg"/>
            <img class="dust dust4" src="img/Dust4.svg"/>
            <img class="dust dust5" src="img/Dust5.svg"/>
            <img class="dust dust6" src="img/Dust6.svg"/>
            <img class="dust dust7" src="img/Dust7.svg"/>
            <img class="dust dust8" src="img/Dust8.svg"/>
            <img class="dust dust9" src="img/Dust9.svg"/>
            <img class="dust dust10" src="img/Dust10.svg"/>
            <img class="dust dust11" src="img/Dust11.svg"/>
            <img class="dust dust12" src="img/Dust12.svg"/>
            <img class="dust dust13" src="img/Dust13.svg"/>
          </div>
        </div>
        <div class="flower flower3">
          <button class="bloomwrap">
            <img class="bloom" src="img/Plant1_Flower1.svg"/>
          </button>
          <div class="dustwrap">
            <img class="dust dust1" src="img/Dust1.svg"/>
            <img class="dust dust2" src="img/Dust2.svg"/>
            <img class="dust dust3" src="img/Dust3.svg"/>
            <img class="dust dust4" src="img/Dust4.svg"/>
            <img class="dust dust5" src="img/Dust5.svg"/>
            <img class="dust dust6" src="img/Dust6.svg"/>
            <img class="dust dust7" src="img/Dust7.svg"/>
            <img class="dust dust8" src="img/Dust8.svg"/>
            <img class="dust dust9" src="img/Dust9.svg"/>
            <img class="dust dust10" src="img/Dust10.svg"/>
            <img class="dust dust11" src="img/Dust11.svg"/>
            <img class="dust dust12" src="img/Dust12.svg"/>
            <img class="dust dust13" src="img/Dust13.svg"/>
          </div>
        </div>
        <div class="flower flower2">
          <button class="bloomwrap">
            <img class="bloom" src="img/Plant1_Flower1.svg"/>
          </button>
          <div class="dustwrap">
            <img class="dust dust1" src="img/Dust1.svg"/>
            <img class="dust dust2" src="img/Dust2.svg"/>
            <img class="dust dust3" src="img/Dust3.svg"/>
            <img class="dust dust4" src="img/Dust4.svg"/>
            <img class="dust dust5" src="img/Dust5.svg"/>
            <img class="dust dust6" src="img/Dust6.svg"/>
            <img class="dust dust7" src="img/Dust7.svg"/>
            <img class="dust dust8" src="img/Dust8.svg"/>
            <img class="dust dust9" src="img/Dust9.svg"/>
            <img class="dust dust10" src="img/Dust10.svg"/>
            <img class="dust dust11" src="img/Dust11.svg"/>
            <img class="dust dust12" src="img/Dust12.svg"/>
            <img class="dust dust13" src="img/Dust13.svg"/>
          </div>
        </div>
        <img class="stem" src="img/Plant1.svg"/>
      </div>
      <div class="parcel barren">
        <img src="img/Barren3.svg"/>
      </div>
      `;

var flowers = document.getElementsByClassName("flower");
var monsterPlate = 0;

function movePlate() {
  var foods = document.getElementsByClassName("monster__food-item");
  var spaceCounter = 0;
  for (var i = 0; i < foods.length; i++) {
    foods[i].style.transform = "translate(" + spaceCounter + "px)";
    spaceCounter += 32;
    var uniqueFlowerId = foods[i].id;
    eatBloom(uniqueFlowerId);
  }
}

function eatBloom(theFlower) {
  monster.classList.add('js-feed');
  document.getElementById(theFlower).classList.add('js-bloomEaten');
  setTimeout(function(){
    monster.classList.remove('js-feed');
    document.getElementById(theFlower).remove();
  }, 1300);
  setTimeout(function(){
    monsterPlate--; 
    if (monsterPlate >= 1) {
      movePlate();
    }
  }, 1301);
}

var harvest = function() {
    var flower = this;
    if (!flower.classList.contains("js-harvested")) {
        var uniqueFlowerId = "unique-flower-" + counterNumber;
        counterNumber++;
        counter.innerHTML = counterNumber;
        
        // remove the flower from the farm
        flower.classList.add('js-harvested');
        setTimeout(function(){
            flower.classList.add('js-gone');
        }, 750);

        // add the flower to the monster's plate
        monsterPlate++;
        monsterFood.innerHTML += '<div class="monster__food-item" id="'+ uniqueFlowerId + '" ><div class="bloomWrap"><img class="bloom" src="img/Plant1_Flower1.svg"/></div></div>';
        setTimeout(function(){
          document.getElementById(uniqueFlowerId).classList.add('js-onPlate');
        }, 1);

        // feed the monster
        if (monsterPlate == 1) {
          eatBloom(uniqueFlowerId);
        } else if (monsterPlate == 2) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(32px)";
        } else if (monsterPlate >= 3) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(64px)";
        }
    }
};

for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', harvest, false);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
