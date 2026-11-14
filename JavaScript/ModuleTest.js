import { greet } from '../JavaScript/Modules.js';
import { add, sub } from './Modules.js'
import { message, fruits, user } from './Modules.js'
import { Students } from './Modules.js'
import A from './Modules.js'
import { Login } from './Modules.js'
import MyLogin from './Module1.js'

greet()

add(5, 7)

sub(10, 5)

console.log(message)

console.log(fruits)

console.log(user.uname)
console.log(user.uid)

let s1 = new Students("Mani", 101)
s1.display()

let a = new A()  //different name import only default class
a.eat()          // a file have only one default class   
a.sleep()


let l1 = new Login()
l1.login()

let l2 = new MyLogin()
l2.login()