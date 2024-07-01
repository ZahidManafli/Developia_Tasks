//default coofficient
var coofficient_6_month = 1.1
var coofficient_12_month = 1.15
var coofficient_24_month = 1.2
var coofficient_36_month = 1.25
var coofficient_48_month = 1.35

//promts for to get information from user
let fullname = prompt("Enter your fullname:")
let credit_amount = parseFloat(prompt("How much credit will you take?"))
let credit_duration = parseInt(prompt("How long will you take the loan?(6/12/24/36/48)"))
let customer_salary = parseFloat(prompt("How much your salary?"))

//html elements
let fullname_p = document.getElementById("fullname")
let credit_amount_p = document.getElementById("credit_amount")
let credit_duration_p = document.getElementById("credit_duration")
let customer_salary_p = document.getElementById("customer_salary")
let total_credit_amount_p = document.getElementById("total_credit_amount")
let monthy_pay_p = document.getElementById("monthy_pay")
let salary_rate_p = document.getElementById("salary_rate")
let status_p = document.getElementById("status")
let confirm_credit_button = document.getElementById("confirm_credit")
let change_option_button = document.getElementById("change_option")

//Variables that are derived from user's promts
let total_credit_amount = (credit_amount * window[`coofficient_${credit_duration}_month`]).toFixed(2)
let monthy_pay = ((credit_amount * window[`coofficient_${credit_duration}_month`])/credit_duration).toFixed(2)
let salary_rate = customer_salary*0.6

//writing results to html elements
fullname_p.innerText = `Fullname: ${fullname}`
credit_amount_p.innerText = `Credit amount: ${credit_amount.toFixed(2)}$`
credit_duration_p.innerText = `Credit duration: ${credit_duration} month`
customer_salary_p.innerText = `Customer's salary: ${customer_salary}$`
total_credit_amount_p.innerText = `Total credit amount: ${total_credit_amount}$`
monthy_pay_p.innerText = `Monthy pay: ${monthy_pay}$`
salary_rate_p.innerText = `Salary rate: ${salary_rate}$`
if(salary_rate>=monthy_pay){
    status_p.innerText = `Status: Accepted`
    status_p.style.color = "green"
    confirm_credit_button.style.display = "flex"
    confirm_credit_button.style.backgroundColor = "green"
    change_option_button.style.display = "none"
    confirm_credit_button.addEventListener("click",function(){
        alert("Credit confirmed succesfully");
    })
}else{
    status_p.innerText = `Status: Declined`
    status_p.style.color = "red"
    confirm_credit_button.style.display = "none"
    change_option_button.style.display = "flex"
    change_option_button.style.backgroundColor = "red"
    change_option_button.addEventListener("click",function(){
        location.reload()
    })
}