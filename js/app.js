
const cartArray = [];

function display(cartProduct) {
    // console.log(cartProduct);
    const cartPlayer = document.getElementById('cart-player')
    cartPlayer.innerHTML = ''
    for (let i = 0; i < cartProduct.length; i++) {


        const name = cartArray[i].playerName

        const li = document.createElement('li')
        li.innerText = `${i + 1}. ${name}`
        li.style.listStyle = 'none'
        cartPlayer.appendChild(li)
    }

}

function addToCart(element) {

    if (cartArray.length === 5) {
        return alert("Sorry you can't select more than five player")
    }

    const playerName = element.parentNode.parentNode.children[0].innerText;
    console.log(element)
    element.style.cursor = 'not-allowed'
    element.disabled = true
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

        // console.log(typeof totalPlayerExpenses.innerText)

        const totalPlayerExpensesFloat = parseFloat(totalPlayerExpenses.innerText)


        const managerCost = document.getElementById('manager')
        const managerPriceFloat = managerCost.value;
        // console.log(managerCost)
        const managerTotalCost = parseFloat(managerPriceFloat)

        const coachCost = document.getElementById('coach')
        const coachPriceFloat = coachCost.value;
        const coachTotalCost = parseFloat(coachPriceFloat)


        const finalTotal = document.getElementById('final-total')
        const totalPrice = totalPlayerExpensesFloat + managerTotalCost + coachTotalCost;

        finalTotal.innerText = totalPrice

    })
})


