// grab our page html elements
const unitsInput = document.getElementById("units-input")
const convertBtn = document.getElementById("convert-btn")
const outputLength = document.getElementById("output-length")
const outputVolume = document.getElementById("output-volume")
const outputMass = document.getElementById("output-mass")

// declare vars
let input = 0
let meters = 0
let feet = 0
let gallons = 0
let liters = 0
let pounds = 0
let kilos = 0

// render our page
function render() {
    input = unitsInput.value
    feet = metersToFeet(input)
    meters = feetToMeters(input)
    gallons = litersToGallons(input)
    liters = gallonsToLiters(input)
    pounds = kilosToPounds(input)
    kilos = poundsToKilos(input)

    outputLength.innerHTML = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    outputVolume.innerHTML = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
    outputMass.innerHTML = `${input} kilograms = ${pounds} pounds | ${input} pounds = ${kilos} kilograms`
}
// render page when convert button is clicked
convertBtn.addEventListener( "click", function() {  
    render()
} )
// clear input field when clicked into
unitsInput.addEventListener( "click", function() {
    unitsInput.value = ""
} )
// unit conversion functions
function metersToFeet(num) {
    return  (num * 3.280).toFixed(2)
}

function feetToMeters(num) {
    return (num * 0.304).toFixed(2)
}

function litersToGallons(num) {
    return (num *  0.264).toFixed(2)
}

function gallonsToLiters(num) {
    return (num * 3.785).toFixed(2)
}

function kilosToPounds(num) {
    return (num /  2.205).toFixed(2) 
}

function poundsToKilos(num) {
    return (num *  2.205).toFixed(2) 
}

render()
