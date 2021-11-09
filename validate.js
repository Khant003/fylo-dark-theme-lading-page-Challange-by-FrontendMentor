const form = document.querySelector('.form')
const emailInput = document.querySelector('.email-input')
const errorMsg = document.querySelector('.err-msg')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = emailInput.value
    if (inputValue == "") {
        setError("Email is empty")
    }else if (!validateEmail(inputValue)) {
        setError ("Email is not validate")
    }else {
        setSuccess("Complete")
    }
})
function setError (msg) {
    form.classList.add('error')
    errorMsg.innerHTML = msg
}
function setSuccess (msg) {
    form.classList.add('error')
    errorMsg.innerHTML = msg
    errorMsg.style.color = "rgb(50, 205, 102)"
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }