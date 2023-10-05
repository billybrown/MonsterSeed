

var flowers = document.getElementsByClassName("flower");
var monster = document.getElementById("monster");

var harvest = function() {
    var flower = this;
    flower.classList.add('js-harvested');
    setTimeout(function(){
        flower.classList.add('js-gone');
    }, 750);

    monster.classList.add('js-feed');
    setTimeout(function(){
        monster.classList.remove('js-feed');
    }, 1300);
};

for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', harvest, false);
}