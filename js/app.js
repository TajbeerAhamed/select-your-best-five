// const selectNeymar = document.getElementById('select-neymar').addEventListener('click', function () {
//     const neymar = document.getElementById('neymar')
//     const neymarName = neymar.innerText
//     const playerList = document.getElementById('player-list')
//     const li = document.createElement('li')
//     li.innerText = neymarName

// console.log(element.parentNode.parentNode.children)
// console.log(element.parentNode.parentNode.children[0].innerText)


// })

const cartArray = [];

function display(cartProduct) {
    console.log(cartProduct);
    const cartPlayer = document.getElementById('cart-player')
    cartPlayer.innerHTML = ''
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartArray[i].playerName)
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
    // console.log(playerName)
    const playerObj = {
        playerName: playerName
    }

    cartArray.push(playerObj)
    // console.log(cartArray)
    // console.log(cartArray.length)
    document.getElementById('total-player-added').innerText = cartArray.length

    display(cartArray)
}


