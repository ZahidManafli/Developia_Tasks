//default coofficient
var coofficient_6_month = 1.1
var coofficient_12_month = 1.15
var coofficient_24_month = 1.2
var coofficient_36_month = 1.25
var coofficient_48_month = 1.35

//promts for to get information from user
let credit_amount = parseFloat(prompt("How much credit will you take?"))
let credit_duration = parseInt(prompt("How long will you take the loan?(6/12/24/36/48)"))

//html elements
let credit_amount_p = document.getElementById("credit_amount")
let credit_duration_p = document.getElementById("credit_duration")
let total_loan_due_p = document.getElementById("total_loan_due")
let montly_pay_p = document.getElementById("montly_pay")

//writing results to html elements
credit_amount_p.innerText = `Credit amount: ${credit_amount.toFixed(2)}$`
credit_duration_p.innerText = `Credit duration: ${credit_duration} month`
total_loan_due_p.innerText = `Total loan due: ${(credit_amount * window[`coofficient_${credit_duration}_month`]).toFixed(2)}$`
montly_pay_p.innerText = `Montly pay: ${((credit_amount * window[`coofficient_${credit_duration}_month`])/credit_duration).toFixed(2)}$`