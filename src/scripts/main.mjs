// Imports go first
import { firePottery } from "./klin.mjs"
import { makePottery } from "./potteryWheel.mjs"

debugger
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1.5, 4)
let vase = makePottery("vase", 3, 6)
let plate = makePottery("plate", 2, 1)
let largeVase = makePottery("Large Vase", 6, 12)
let largeMug = makePottery("Large Mug", 6, 5)

//console.log(mug, vase, plate, largeVase)
// Fire each piece of pottery in the kiln
const test1 = firePottery(mug, 2200)
const test2 = firePottery(vase, 1900)
const test3 = firePottery(plate, 2400)
const test4 = firePottery(largeVase, 1800)
const test5 = firePottery(largeMug, 2100)

//console.log(test1, test2, test3, test4, test5)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

