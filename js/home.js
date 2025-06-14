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
                 
            } else {
                alert('wrong pin, try again')
            }
        })

// cashOut

 document.getElementById('CashOut').addEventListener('click', function (event) {
            event.preventDefault()
            console.log('teka de teka')
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
                 
            } else {
                alert('wrong pin, try again')
            }
        })

        
        // toggle mode feature

     document.getElementById('cashin-btn').addEventListener('click', function () {
            document.getElementById('cashin-form').classList.remove('hidden');
            document.getElementById('cashout-form').classList.add('hidden');
        })

         document.getElementById('cashout-btn').addEventListener('click', function () {
            document.getElementById('cashout-form').classList.remove('hidden');
             document.getElementById('cashin-form').classList.add('hidden');
        })
        