//Create variables here
var dog, happyDog, database, foodS, foodStock,dogimage,happyDogimage,food,milkimage,milk1,addFood,addfood,feed,feedDog,lastFed,Milk,fedTime,foodObj;



var milk2;
var milk3;
var milk4;
var milk5;
var milk6;
var milk7;
var milk8;
var milk9;
var milk10;
function preload()
{
 dogimage= loadImage("Dog.png");
 happyDogimage= loadImage("happyDog.png");
 milkimage = loadImage("Milk.png");


}

function setup() {
  createCanvas(800, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value',readstock);

  dog = createSprite(600, 390,20,20);
  dog.addImage(dogimage);
  dog.scale = 0.3;


feed = createButton('Feed the dog');
feed.position(600,300);
feed.mousePressed(feedDog);

addfood= createButton('Add food');
addfood.position(500,300);
addfood.mousePressed(addFood);

foodObj = new Food(200,200,20,20);
}



function draw() {  
background(46,139,87);
textSize(15);
if(lastfed>=12){
  text("Last Feed : " + lastfed%12 + "PM",350,30);
}
else if(lastfed==0){
 text("Last Feed : 12AM",350,30);
}
else{
text("Last Feed : ",lastFed+ "AM",350,30);
}

fedTime = database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
});

  drawSprites();
  fill("darkblue");
  text("note, tap the up arrow to feed the puppy",300,20);
  text("puppy food left:"+foodS ,540,200);

}

function readstock(data){
  foodS=data.val();
}

  database.ref("/").update({
    Food : x
  })




function feedDog(){
  dog.addImage(happyDogimage);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}