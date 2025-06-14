// cashin
document.getElementById('cashin-btn').addEventListener('click', function () {
    // document.getElementById('cashin-form').classList.remove('hidden');
    // document.getElementById('cashout-form').classList.add('hidden');
    showSectionById('cashin-form')
})


// cashout
document.getElementById('cashout-btn').addEventListener('click', function () {
    // document.getElementById('cashout-form').classList.remove('hidden');
    // document.getElementById('cashin-form').classList.add('hidden');
    showSectionById('cashout-form')
})

// transaction
document.getElementById('transaction-btn').addEventListener('click',function(){
    showSectionById('transactions')
})
