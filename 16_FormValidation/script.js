const nameError = document.querySelector("#name-error")
const phoneError = document.querySelector("#phone-error")
const emailError = document.querySelector("#email-error")
const messageError = document.querySelector("#message-error")
const submitError = document.querySelector("#submit-error")

const contectName = document.querySelector("#contect-name")
const contectPhone = document.querySelector("#contect-phone")
const contectEmail = document.querySelector("#contect-email")
const contectMessage = document.querySelector("#contect-message")

const subBtn = document.querySelector("#subBtn")


// NAME VALIDATION

function validateName(){

    let name = contectName.value.trim()

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false
    }

    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Write full name"
        return false
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


// PHONE VALIDATION

function validatePhone(){

    let phone = contectPhone.value.trim()

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required"
        return false
    }

    if(!phone.match(/^[0-9]*$/)){
        phoneError.innerHTML = "Only digits please"
        return false
    }

    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits"
        return false
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


// EMAIL VALIDATION

function validateEmail(){

    let email = contectEmail.value.trim()

    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false
    }

    if(!email.match(/^\S+@\S+\.\S+$/)){
        emailError.innerHTML = "Write valid email"
        return false
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


// MESSAGE VALIDATION

function validateMessage(){

    let message = contectMessage.value.trim()

    let required = 30
    let left = required - message.length

    if(message.length == 0){
        messageError.innerHTML = "Message is required"
        return false
    }

    if(left > 0){
        messageError.innerHTML = `${left} more characters required`
        return false
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


// EVENT LISTENERS

contectName.addEventListener('keyup', validateName)

contectPhone.addEventListener('keyup', validatePhone)

contectEmail.addEventListener('keyup', validateEmail)

contectMessage.addEventListener('keyup', validateMessage)


// FORM SUBMIT VALIDATION

subBtn.addEventListener('click', (e)=>{

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){

        e.preventDefault()

        submitError.innerHTML = "Please fix errors before submitting"

        setTimeout(()=>{
            submitError.innerHTML = ""
        }, 3000)

        return false
    }

})