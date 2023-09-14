//Übungsaufgabe

class animal {
   constructor(name, weight, alive){
    this.name = name;
    this.weight = weight;
    this.alive = true;
   } 

   feed (amount){
        this.weight += amount;
   }
}
class Predator extends animal {
    constructor(name, weight, dangerfactor = 1){
        super(name, weigt)
        this.dangerfactor = dangerfactor
    }
}


class Prey extends animal {

}

let sheep = new Prey("Shaun", 35)
sheep.feed(3)
console.log(sheep.weight)
console.log(sheep instanceof Prey)
console.log(sheep instanceof animal)
let lion = new Predator ("Leon", 250)
console.log(lion.weight)