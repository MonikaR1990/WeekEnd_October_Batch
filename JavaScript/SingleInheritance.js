class Animal                         //Parent Class //Super Class //Base Class
{
    eat() 
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}
    
class Dog extends Animal             //Child Class  //Sub Class //Derived Class
{
    bark()
    {
        console.log("Barking")
    }
}

let a = new Animal()
a.eat()
a.sleep()

let d = new Dog()
d.eat()
d.sleep()
d.bark()