function preload(){
ground img= loudimage("ground.png");

snakeGroup =newGroup;
}




function setup() {
 createCanvas(600,600);
ground.createsprite(300,300);
ground.addimage("ground",groundimg);
groundvelocityX =1;
}
spawnsnake();
drawsprite();






function draw() {
 background(0);


 if(ground.x >200);
ground.x =300
}
function spawnsnake() {
// write a code to spawn the snake in the ground
if(framecount % 240 === 0) {
var snake = createsprite(200, +5);


