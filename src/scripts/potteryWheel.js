
let potteryId = 1;


export function makePottery(shape, weight, height) {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };
    potteryId++;
    return pottery;
}
