
const cartArray = [];

function display(cartProduct) {
    console.log(cartProduct);
    const cartPlayer = document.getElementById('cart-player')
    cartPlayer.innerHTML = ''
    for (let i = 0; i < cartProduct.length; i++) {

        const name = cartArray[i].playerName

        const ul = document.createElement('ul')
        ul.innerHTML = `
        <li>${i + 1}.  ${name} </li>
        `
        cartPlayer.appendChild(ul)
    }

}

function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }

    cartArray.push(playerObj)
    document.getElementById('total-player-added').innerText = cartArray.length

    display(cartArray)
}

document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerFloat = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerFloat)

    const cartPlayerAmount = document.getElementById('total-player-added')
    const totalPlayer = cartPlayerAmount.innerText


    const playerExpenses = perPlayer * totalPlayer;
    const totalPlayerExpenses = document.getElementById('total-player-expenses')
    totalPlayerExpenses.innerText = playerExpenses



    document.getElementById('cal-total').addEventListener('click', function () {
        const totalPlayerExpenses = document.getElementById('total-player-expenses')
        const totalPlayerPrice = totalPlayerExpenses.value;

        const managerCost = document.getElementById('manager')
        const managerPriceFloat = managerCost.value;
        const managerTotalCost = parseFloat(managerPriceFloat)

        const coachCost = document.getElementById('coach')
        const coachPriceFloat = coachCost.value;
        const coachTotalCost = parseFloat(coachPriceFloat)


        const finalTotal = document.getElementById('final-total')
        finalTotal.innerText = totalPlayerPrice + + managerTotalCost + coachTotalCost;

    })
})


