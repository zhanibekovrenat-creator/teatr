document.addEventListener("DOMContentLoaded", () => {
const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');


let index = 0;


function update() {
const width = items[0].offsetWidth + 30;
track.style.transform = `translateX(-${index * width}px)`;
}


next.onclick = () => {
if (index < items.length - 1) index++;
update();
};


prev.onclick = () => {
if (index > 0) index--;
update();
};


setInterval(() => {
index = (index + 1) % items.length;
update();
}, 6000);
});