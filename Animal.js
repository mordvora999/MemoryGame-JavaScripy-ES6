export class Animal
{
    constructor(animal_name)
    {
        this.animal_name=animal_name;
    }  
    compare(){ 
     if(this.animal_name[0].children[1].innerHTML==this.animal_name[1].children[1].innerHTML)
     {
         return true
     }
     else
     {
         console.log(this.animal_name)
         return false
     }
     
    }  
   draw(DivElement){}
     
   
}


//module.exports.Animal

