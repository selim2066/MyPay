console.log("whts up dear")
document.getElementById('loginBtn').addEventListener('click', function (event) {
    console.log("hi")
    event.preventDefault()
    const phoneNum = document.getElementById('phoneNum')
    const pin = document.getElementById('pin')

    if (phoneNum.value === '2066' && pin.value === '213') {
        console.log('good, this is your new home')
        window.location.href = '/home.html'

    } else {
        alert('wrong credential\n')
    }
    phoneNum.value = ''
    pin.value = ''

})