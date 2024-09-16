export const firePottery = (potteryObject, kilnTemperature) => {
    potteryObject.fired = true
    if(kilnTemperature > 2200)
        potteryObject.cracked = true
    else {
        potteryObject.cracked = false
    }
    return potteryObject
}
