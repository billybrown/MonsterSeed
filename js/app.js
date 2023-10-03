

var flowers = document.getElementsByClassName("flower");

var harvest = function() {
    this.classList.add('harvested');
};

for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', harvest, false);
}