var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);
  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;

}

function draw() {

  background(255,255,255);  
  drawSprites();
    if (hasCollided(bullet, wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
      if (damage >= 10){
        wall.shapeColor = 'red'
        text('The wall is unsafe, for a thickness of about ' + Math.round(thickness) + 
        ' is too low with a bullet speed of '+ Math.round(speed) + ' and a bullet weight of '
       + Math.round(weight) + '.', 20, 20);
      } 

      if (damage < 10){
        wall.shapeColor = 'green'
        text('The wall is safe, so please use thickness of about ' + Math.round(thickness) + 
        ' expecting a bullet speed of '+ Math.round(speed) + ' and a bullet weight of '
       + Math.round(weight) + '.', 20, 20);
      }
    }


}

function hasCollided (lbullet, lwall){
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
      return true;
  } else{
      return false;
  }
}
