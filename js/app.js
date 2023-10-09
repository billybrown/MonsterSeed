
var body = document.getElementById("body");
var monster = document.getElementById("monster");
var monsterSprite = document.getElementById("monsterSprite");
var monsterFood = document.getElementById("monsterFood");
var farm = document.getElementById("farm");
var foodCounter = document.getElementById("foodCounter");
var foodCounterNumber = 0;
var dayCounter = document.getElementById("dayCounterCount");
var dayCounterNumber = 1;
var timer = document.getElementById("timer");
var flowers;


// plant the farm
var parcelCrop = '<div class="parcel crop"><div class="flower flower1"><button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/></button><div class="dustwrap"><img class="dust dust1" src="img/Dust1.svg"/><img class="dust dust2" src="img/Dust2.svg"/><img class="dust dust3" src="img/Dust3.svg"/><img class="dust dust4" src="img/Dust4.svg"/><img class="dust dust5" src="img/Dust5.svg"/><img class="dust dust6" src="img/Dust6.svg"/><img class="dust dust7" src="img/Dust7.svg"/><img class="dust dust8" src="img/Dust8.svg"/><img class="dust dust9" src="img/Dust9.svg"/><img class="dust dust10" src="img/Dust10.svg"/><img class="dust dust11" src="img/Dust11.svg"/><img class="dust dust12" src="img/Dust12.svg"/><img class="dust dust13" src="img/Dust13.svg"/></div></div><div class="flower flower3">  <button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/>  </button>  <div class="dustwrap">    <img class="dust dust1" src="img/Dust1.svg"/>    <img class="dust dust2" src="img/Dust2.svg"/>    <img class="dust dust3" src="img/Dust3.svg"/>    <img class="dust dust4" src="img/Dust4.svg"/>    <img class="dust dust5" src="img/Dust5.svg"/>    <img class="dust dust6" src="img/Dust6.svg"/>    <img class="dust dust7" src="img/Dust7.svg"/>    <img class="dust dust8" src="img/Dust8.svg"/>    <img class="dust dust9" src="img/Dust9.svg"/>    <img class="dust dust10" src="img/Dust10.svg"/>    <img class="dust dust11" src="img/Dust11.svg"/>    <img class="dust dust12" src="img/Dust12.svg"/>    <img class="dust dust13" src="img/Dust13.svg"/>  </div></div><div class="flower flower2">  <button class="bloomwrap">    <img class="bloom" src="img/Plant1_Flower1.svg"/>  </button>  <div class="dustwrap">    <img class="dust dust1" src="img/Dust1.svg"/>    <img class="dust dust2" src="img/Dust2.svg"/>    <img class="dust dust3" src="img/Dust3.svg"/>    <img class="dust dust4" src="img/Dust4.svg"/>    <img class="dust dust5" src="img/Dust5.svg"/>    <img class="dust dust6" src="img/Dust6.svg"/>    <img class="dust dust7" src="img/Dust7.svg"/>    <img class="dust dust8" src="img/Dust8.svg"/>    <img class="dust dust9" src="img/Dust9.svg"/>    <img class="dust dust10" src="img/Dust10.svg"/>    <img class="dust dust11" src="img/Dust11.svg"/>    <img class="dust dust12" src="img/Dust12.svg"/>    <img class="dust dust13" src="img/Dust13.svg"/>  </div></div><img class="stem" src="img/Plant1.svg"/></div>';

var maxParcels = Math.ceil(window.innerWidth / 72);
farm.style.width = (maxParcels * 72) + 'px';

function plantFarm() {
  for (var i = 0; i < maxParcels; i++) {
      var random = getRandomInt(4) + 1;
      if (random == 4) {
          farm.innerHTML += parcelCrop;
      } else {
          farm.innerHTML += '<div class="parcel barren"><img src="img/Barren' + random + '.svg"/></div>';
      }
  }

  flowers = document.getElementsByClassName("flower");
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', harvest, false);
  }
}

// generate the monster
var randomMonster = getRandomInt(6) + 1;
monsterSprite.innerHTML = '<img class="monster__breath1" src="img/M' + randomMonster + '_1.svg" /><img class="monster__breath2" src="img/M' + randomMonster + '_2.svg" /><img class="monster__open" src="img/M' + randomMonster + '_3.svg" /><img class="monster__closed" src="img/M' + randomMonster + '_4.svg" />';

var monsterPlate = 0;

// feed the monster
// function movePlate() {
//   foods = document.getElementsByClassName("monster__food-item");
//   spaceCounter = 0;
//   for (var i = 0; i < foods.length; i++) {
//     foods[i].style.transform = "translate(" + spaceCounter + "px)";
//     spaceCounter += 32;
//     eatBloom(foods[i].id);
//   }
// }

// function eatBloom(theFlower) {
//   // the monster eating animating happens
//   monster.classList.add('js-feed');
//   document.getElementById(theFlower).classList.add('js-bloomEaten');

//   // after 1.3 seconds the monster stops eating and if there any foods still on the plate they animate over
//   setTimeout(function(){
//     monster.classList.remove('js-feed');
//     document.getElementById(theFlower).remove();
//     monsterPlate--; 
//     if (monsterPlate >= 1) {
//       movePlate();
//     }
//   }, 1300);
// }

function startEating() {
  // the monster eating animating happens
  MonsterEating = true;
  monster.classList.add('js-feed');
  foods = document.getElementsByClassName("monster__food-item");
  theFirstFlower = foods[0].id;
  document.getElementById(theFirstFlower).classList.add('js-bloomEaten');
  spaceCounter = 0;

  for (var i = 0; i < foods.length; i++) {
    foods[i].style.transform = "translate(" + spaceCounter + "px)";
    spaceCounter += 32;
    //eatBloom(foods[i].id);
  }

  //   // after 1.3 seconds the monster stops eating and if there any foods still on the plate they animate over
  setTimeout(function(){
    foodCounterNumber++;
    foodCounter.innerHTML = foodCounterNumber;
    document.getElementById(theFirstFlower).remove();
    monsterPlate--; 
    if (monsterPlate >= 1) {
      startEating();
    } else {
      MonsterEating = false;
      monster.classList.remove('js-feed');
    }
  }, 1300);

  //document.getElementById(theFlower).classList.add('js-bloomEaten');
}

var MonsterEating = false;
var uniqueFlowerCount = 0;

var harvest = function() {
    var flower = this;
    if (!flower.classList.contains("js-harvested")) {
        var uniqueFlowerId = "unique-flower-" + uniqueFlowerCount;
        uniqueFlowerCount++;
        
        // remove the flower from the farm
        flower.classList.add('js-harvested');
        setTimeout(function(){
            flower.classList.add('js-gone');
        }, 750);

        // add the flower to the monster's plate
        monsterPlate++;
        monsterFood.innerHTML += '<div class="monster__food-item" id="'+ uniqueFlowerId + '" ><div class="bloomWrap"><img class="bloom" src="img/Plant1_Flower1.svg"/></div></div>';

        // position the food on the plate based on how many are already there
        if (monsterPlate == 1) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(0)";
        } else if (monsterPlate == 2) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(32px)";
        } else if (monsterPlate == 3) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(64px)";
        } else if (monsterPlate == 4) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(96px)";
        } else if (monsterPlate >= 5) {
          document.getElementById(uniqueFlowerId).style.transform = "translate(128px)";
        }

        // show it on the plate
        setTimeout(function(){
          document.getElementById(uniqueFlowerId).classList.add('js-onPlate');

          if (!MonsterEating) {
            startEating();
          }
        }, 10);
    }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// time

var timeOfDay = "day";
var lengthOfDay = 20000;

function changeTimeOfDay() {
  farm.innerHTML = '';
  plantFarm();
  setTimeout(function(){
    if (!body.classList.contains("js-night")) {
      body.classList.add('js-night');
      timer.classList.remove('js-onward');
    } else {
      body.classList.remove('js-night');
      timer.classList.add('js-onward');
      dayCounterNumber++;
      dayCounter.innerHTML = dayCounterNumber;
    }
    changeTimeOfDay();
  }, lengthOfDay);
}

changeTimeOfDay();
setTimeout(function(){
  timer.classList.add('js-onward');
}, 10);
