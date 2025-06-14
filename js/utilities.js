// cash in cash out

function showSectionById(id) {
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('cashin-form').classList.add('hidden');
    document.getElementById('transactions').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}