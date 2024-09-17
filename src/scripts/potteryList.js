import { usePottery, clearancePottery } from "./potteryCatalog.js";

export function PotteryList() {
    const goodPottery = usePottery()
    const weCanSellIt = clearancePottery()
    let html = ""
    let SuperSaverPottery =""
    for( const pottery of goodPottery) {
        html +=`
        <section class="potteryList" id=${pottery.id}>
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height}cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
        `
    }

    if (weCanSellIt.length > 0) { 
        for (const ItllBeOkay of weCanSellIt) {
            SuperSaverPottery += `
            <section class="potteryList" id="pottery--${ItllBeOkay.id}">
                <h2 class="pottery__shape">${ItllBeOkay.shape}</h2>
                <h1 class="Clearance">"Great savings here!"</h1>
                <div class="pottery__properties">
                    Item weighs ${ItllBeOkay.weight} grams and is ${ItllBeOkay.height}cm in height
                </div>
                <div class="pottery__price">Price is $${ItllBeOkay.price}</div>
                <div class="disclaimer">*piece is cracked and price reflects*</div>
            </section>
            `;
        }
    } else {
        SuperSaverPottery = `<h1 class="No_Clearance"> No Clearance this week!</h1>`
    }
    return html + SuperSaverPottery
}
