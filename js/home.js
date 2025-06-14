// Cash In
document.getElementById('addMoney').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('teka de teka')
    const amount = document.getElementById('amount').value
    const pin = document.getElementById('pin').value
    const balance = document.getElementById('balance').innerText
    console.log(amount, pin, balance)

    // convert string to number for calculation
    if (pin === '213') {
        const amountNum = parseFloat(amount)
        const balanceNum = parseFloat(balance)
        const updateBalance = amountNum + balanceNum

        document.getElementById('balance').innerText = updateBalance

        // transaction records
        const div = document.createElement('div')
        div.classList.add('bg-green-800', 'text-white', 'p-4')
        div.innerHTML = `
    <h4 class='text-2xl font-bold'>Cash-In</h4>
    <p>${amount} tk cashin, new balance is ${updateBalance}</p>
`;

        document.getElementById('transactions').appendChild(div)

    } else {
        alert('wrong pin, try again')
    }
})

// cashOut

document.getElementById('CashOut').addEventListener('click', function (event) {
    event.preventDefault()
   
    const amount = document.getElementById('amountCashout').value
    const pin = document.getElementById('pinCashout').value
    const balance = document.getElementById('balance').innerText
    console.log(amount, pin, balance)

    // convert string to number for calculation
    if (pin === '213') {
        const amountNum = parseFloat(amount)
        const balanceNum = parseFloat(balance)
        const updateBalance = balanceNum - amountNum

        document.getElementById('balance').innerText = updateBalance

         // transaction records
        const div = document.createElement('div')
        div.classList.add('bg-yellow-100', 'text-red', 'p-4')
        div.innerHTML = `
    <h4 class='text-2xl font-bold'>Cash-Out</h4>
    <p>${amount} tk cashin, new balance is ${updateBalance}</p>
`;

        document.getElementById('transactions').appendChild(div)

    } else {
        alert('wrong pin, try again')
    }
})




