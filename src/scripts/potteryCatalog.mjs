const potteryInventory = []

export function toSellOrNotToSell(potteryObject) {
    if (potteryObject.cracked == false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40;
        } else {
            potteryObject.price = 20;
        }
        potteryInventory.push(potteryObject);
    }

    return potteryObject;
}

export function usePottery() {
    return potteryInventory.slice()
}