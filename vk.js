import readline from 'readline-sync'

const menubaar=[
   'add a recipe',
    'view all recipe',
    'edit a recipe',
    'delete a recipe',
    'calculate total cooking time',
    "exite the application"
]
console.log(menubaar)
let a = readline.question()

 if(a=='add a recipe')
 {
        console.log("enter the recipe name");
        let c = readline.question()
        console.log("enter ingredients");
        let e = readline.question()
        console.log("enter steps");
        let f= readline.question()
      }
   else if (a=='view all recipe'){
      console.log ("VEG PULAO\n","BURGER\n","PIZZA");  
      console.log( "\nVeg pulao\nfor making the veg pulao use  ingredents = 5 \n steps= boil the rice \n timeing=30m");
      console.log("\n  burger\n for making the burger use some  ingredents = 6 \n steps=fry the bun and put all the ingedents \n timing=10m");
      console.log("\n  Pizza\n  for making the pizza  use some ingredents  = 4 \n steps=beak the pizza base in owan \n timening=20m");

   }
   else if(a=='edit a recipe')
   {
      let h=["Veg pulao", "Pizza", "Burger", "Sandwitch","Chowmeen","Spring rool","Mooms"]
      console.log("Do you want edit the recipe");
      let i=readline.question()
      console.log(h);
      console.log("oky start your editing");
      console.log("enter changes");
      let j=readline.question()
      let k=j; 
      console.log(k);
      let l=h.concat(k)
      console.log(l)
   }
   else if(a=='delete a recipe'){
      console.log("* Do you want delete recipe")
      console.log("yes ||no")
      let m=readline.question()
      console.log("which recipe you want to  delte")
      let recipes = ["veg pulao", "pizza", "burger", "sandwitch","chowmeen","spring roll","mooms"];
      console.log(recipes)
function deleteRecipe(index) {
    if (index >= 0 && index < recipes.length) {
      console.log("enter the index number")
        const deletedRecipe = recipes.splice(index, readline.question());
        console.log(`Recipe "${deletedRecipe[0]}" deleted successfully`);
    } else {
        console.log("Invalid index. No recipe deleted.");
    }
}

deleteRecipe(1);
console.log("Remaining recipes:", recipes);
      
   }
   else if(a=="calculate total cooking time"){
console.log(["veg pulao", "pizza", "burger", "sandwitch","chowmeen","spring rool","momos"])
      console.log("enter recipe  name from list for start cooking")
      let n=readline.question()
      if(n=="pizza"){
         console.log("30 minutes");
      }
       let o= readline.question()
      if(o=="burger"){
         console.log("10 minutes");
      }
      let p=readline.question()
       if(p=="veg pulao"){
         console.log("40 minutes");
      }
      let q=readline.question()
       if(q=="sandwitch"){
         console.log("15 minutes");
      }
      let r=readline.question()
      if(r=="chowmeen"){
         console.log("30 minutes");
      }
      let s=readline.question()
      if(s=="spring roll"){
         console.log("20 minutes");
      }
      let t=readline.question()
      if (t==momos){
         console.log("20minutes");
      }
      }
      else if(a=="exit the application"){
          console.log("are you sure  to  exit")
          let u=readline.question()
            if("yes"){
               console.log("exit ")
            }
   
      }
  