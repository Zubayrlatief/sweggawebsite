// calculate price of Female Ski Jacket

totalFemale = document.getElementById("totalFemale")
quantFemale = document.getElementById("quantFemale")
totalMale = document.getElementById("totalMale")
quantMale = document.getElementById("quantMale")
let total = document.getElementById("total")


let femalePrice = 150.95;
let malePrice = 180.95

function calculateTotalPrice(quantity, price) {
    return quantity * price
}

function calculteOrderTotalPrice(totalFemalePrice, totalMalePrice) {
      return totalFemalePrice + totalMalePrice
}

let calculateBtn = document.getElementById("calculate")

calculateBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    calculateTot()
})

function calculateTot() {
    let totalFemalePrice = calculateTotalPrice(quantFemale.value, femalePrice)
 

    totalFemale.innerHTML = totalFemalePrice.toFixed(2)

let totalMalePrice = calculateTotalPrice(quantMale.value, malePrice)

    totalMale.innerHTML = totalMalePrice.toFixed(2)
    
let totalPrice = calculteOrderTotalPrice(totalFemalePrice, totalMalePrice)
   total.innerHTML = totalPrice.toFixed(2)
}

console.log(calculateTotalPrice(quantFemale.value, femalePrice))

console.log(calculateTotalPrice(quantMale.value, malePrice))