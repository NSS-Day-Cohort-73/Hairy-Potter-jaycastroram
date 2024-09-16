// Imports go first
import { firePottery } from "./klin.mjs"
import { makePottery } from "./potteryWheel.mjs"
import { toSellOrNotToSell, usePottery } from "./potteryCatalog.mjs"
debugger
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1.5, 4)
let vase = makePottery("vase", 3, 6)
let plate = makePottery("plate", 2, 1)
let largeVase = makePottery("Large Vase", 9, 12)
let largeMug = makePottery("Large Mug", 8, 5)

//console.log(mug, vase, plate, largeVase)
// Fire each piece of pottery in the kiln
const test1 = firePottery(mug, 2200)
const test2 = firePottery(vase, 1900)
const test3 = firePottery(plate, 2400)
const test4 = firePottery(largeVase, 1800)
const test5 = firePottery(largeMug, 2100)

//console.log(test1, test2, test3, test4, test5)

// Determine which ones should be sold, and their price
let anotherOne1 = toSellOrNotToSell(test1)
let anotherOne2 = toSellOrNotToSell(test2)
let anotherOne3 = toSellOrNotToSell(test3)
let anotherOne4 = toSellOrNotToSell(test4)
let anotherOne5 = toSellOrNotToSell(test5)

//console.log(anotherOne1, anotherOne2, anotherOne3, anotherOne4, anotherOne5)

// Invoke the component function that renders the HTML list

