class Food {

    preload(){
    milkimage = loadImage("Milk.png");
    }

    constructor() {
     var foodStock ;
     var lastFed;
    }

    display(){
  var x = 80, y = 100;
  imageMode(CENTER);
    image(this.image,720,220,70,70);
    if(this.foodStock!=0){
      for(var i = 0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }


      }
    
  
  

    getFoodStock(){
        var foodstock1 = database.ref('Food');
        foodstock1.on("value",(data)=>{
          foodS = data.val();
        })
      }
    
      updateFoodStock(count){
        database.ref('/').update({
          foodS: count
        });
      }

      }
    