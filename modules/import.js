// IMPORT *
import {em, printHi} from './export'

console.log(em)
printHi()


// import everything using "*"
import * as abc from './export'

abc.printHello()



// IMPORT "as"
import { printHello as pH, user as usr } from './export'

console.log(usr);
pH();

