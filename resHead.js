var string = "My name is Hunter Funk, and I am a...";
var str = string.split("");
var el = document.getElementById('resHead');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 70);
})();