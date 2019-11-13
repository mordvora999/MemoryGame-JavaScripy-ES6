
import {Bat} from './Bat.js';
import {Bird} from './Bird.js';
import {Cat} from './Cat.js';
import {Dog} from './Dog.js';
import {Duck} from './Duck.js';
import {Elephent} from './Elephent.js';
import {Horse} from './Horse.js';
import {Dragon} from './Dragon.js';
import { Animal } from './Animal.js';


 

//ציור של הכרטיסים
  let cards= document.getElementsByClassName('flp-card')
  
  for(let i=0;i<cards.length;i++)
  {

      cards[i].addEventListener('click',function(e){            
      openCard(this)
       this.classList.toggle('flip'); 
      
             
      },false)
      
 }
 //

var openedCards=[];
//ישמור את הכרטיס שנפתח
function openCard(CardDiv)
{
   openedCards.push(CardDiv);
   if(openedCards.length==2)
   {
     let  animal = new Animal(openedCards) 
     let res=animal.compare();
     if(res)
     {
      
       matched_open(openedCards);
     }
     else
     {
      unmatched_close(openedCards)
     }   
     
      openedCards=[];//איפוס זוגות
   } 
 
}

let wins=0;
function matched_open(elem)
{
  console.log(elem[0]) 
 console.log("open");
 elem[0].classList.add("match")
 elem[1].classList.add("match")

 wins+=1;
 if(wins==8){alert("--- YOU WIN!!! ---")}

}

function unmatched_close(elem)
{
  let time= setTimeout(() =>
  {
    elem[0].classList.toggle("flip")
    elem[1].classList.toggle("flip")
    console.log("close")
  },3000);
  
   

}


//עירבוב של הכרטיסים
 const animalsArray = ['Dog' , 'Horse' , 'Cat' , 'Bird', 'Elephent' , 'Bat' , 'Dragon' , 'Duck'] 
 const animalsObjectArray = [new Dog("Dog") ,new Horse("Horse"), new Cat("Cat") ,new Bird("Bird") ,new Elephent("Elephent")  ,new Bat("Bat")  ,new Dragon("Dragon")  ,new Duck("Duck"),new Dog("Dog") ,new Horse("Horse"), new Cat("Cat") ,new Bird("Bird") ,new Elephent("Elephent")  ,new Bat("Bat")  ,new Dragon("Dragon")  ,new Duck("Duck") ] 



 function MixCards(animalsObjectArray) {
    var currentIndex = animalsObjectArray.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = animalsObjectArray[currentIndex];
      animalsObjectArray[currentIndex] = animalsObjectArray[randomIndex];
      animalsObjectArray[randomIndex] = temporaryValue;
    }
    console.log(animalsObjectArray)
    return animalsObjectArray;
  } 


//מפעיל פונקצית draw באוביקטים
     let BackCards= document.getElementsByClassName('back');
 
     let shuffledCards = MixCards(animalsObjectArray);
     for (var i= 0; i < shuffledCards.length; i++)
     {
      shuffledCards[i].draw(BackCards[i])  
      } 
  
      
 
  