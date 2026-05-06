const displayArea = document.querySelector("#displayArea")
const allClear = document.querySelector("#allClear")
const deleteBtn = document.querySelector("#delete")
const point = document.querySelector("#point")
const division = document.querySelector("#division")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const multiply = document.querySelector("#multiply")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const minus = document.querySelector("#minus")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const plus = document.querySelector("#plus")
const doubleZero = document.querySelector("#doubleZero")
const zero = document.querySelector("#zero")
const equal = document.querySelector("#equal")

one.addEventListener('click', () => {
    displayArea.value += 1
})
two.addEventListener('click', () => {
    displayArea.value += 2
})
three.addEventListener('click', () => {
    displayArea.value += 3
})
four.addEventListener('click', () => {
    displayArea.value += 4
})
five.addEventListener('click', () => {
    displayArea.value += 5
})
six.addEventListener('click', () => {
    displayArea.value += 6
})
seven.addEventListener('click', () => {
    displayArea.value += 7
})
eight.addEventListener('click', () => {
    displayArea.value += 8
})
nine.addEventListener('click', () => {
    displayArea.value += 9
})
zero.addEventListener('click', () => {
    displayArea.value += 0
})
doubleZero.addEventListener('click', () => {
    displayArea.value += "00"
})
allClear.addEventListener('click', () => {
    displayArea.value = ""
})
point.addEventListener('click', () => {
    displayArea.value += "."
})
plus.addEventListener('click', () => {
    displayArea.value += "+"
})
minus.addEventListener('click', () => {
    displayArea.value += "-"
})
multiply.addEventListener('click', () => {
    displayArea.value += "*"
})
division.addEventListener('click', () => {
    displayArea.value += "/"
})
deleteBtn.addEventListener('click', () => {
    displayArea.value = displayArea.value.toString().slice(0, -1)
})

equal.addEventListener('click', () => {
    if (displayArea.value == "") {
        return
    }
    displayArea.value = eval(displayArea.value)
})