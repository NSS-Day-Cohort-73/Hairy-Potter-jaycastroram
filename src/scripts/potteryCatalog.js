let potteryInventory = []
let discountedPottery = []

export function toSellOrNotToSell(potteryObject) {
    if (!potteryObject.cracked) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40;
        } else {
            potteryObject.price = 20;
        }
        potteryInventory.push(potteryObject);
    
    return potteryObject;
    }
    if(potteryObject.cracked === true) {
        potteryObject.price = 2.99
        discountedPottery.push(potteryObject)
    }
}



export function usePottery() {
    return potteryInventory.slice()
}

export function clearancePottery() {
    return discountedPottery.slice()
}