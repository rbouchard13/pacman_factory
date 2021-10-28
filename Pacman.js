let pos = 0;
var focus = 0;
var dir = {};
var i = 1;
const pacMen = []; 
const pacArray = [
  	['./images/PacMan1.png', './images/PacMan2.png'],['./images/PacMan3.png', './images/PacMan4.png'],
];

function setToRandom(scale) {
  	return {
    		x: Math.random() * scale, y: Math.random() * scale,
  	};
}

function makePac() {
  	let velocity = setToRandom(15); // {x:?, y:?}
  	let position = setToRandom(800);
  	let game = document.getElementById('game');
  	let img = document.createElement('img');
  	img.style.position = 'absolute';
	img.id = i; dir[i] = 0;
  	img.src = './images/PacMan1.png';
  	img.style.width = 100;
  	img.style.left = position.x + "px";
  	img.style.top = position.y + "px";
  	game.appendChild(img);
	i++;
  	return {
    		position, velocity, img,
  	};
}

function update() {
  	pacMen.forEach((item) => {
		focus = (focus + 1) % 2;
    		checkCollisions(item);
		let id = item.img.id;
		item.img.src = pacArray[dir[id]][focus];
    		item.position.x += item.velocity.x;
    		item.position.y += item.velocity.y;
    		item.img.style.left = item.position.x;
    		item.img.style.top = item.position.y;
  	});
  	setTimeout(update, 200);
}

function checkCollisions(item) {
	let id = item.img.id;
	let edgeW = window.innerWidth - item.img.width; let edgeH = window.innerHeight -item.img.width;
	if (item.position.x >= edgeW){item.velocity.x = item.velocity.x * -1; dir[id] = 1;}
	if (item.position.x <=0){item.velocity.x = item.velocity.x * -1; dir[id] = 0;}
	if (item.position.y >= edgeH || item.position.y <=0){item.velocity.y = item.velocity.y * -1;}
}

function makeOne() {
pacMen.push(makePac()); 
}
