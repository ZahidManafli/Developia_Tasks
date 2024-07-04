//default coofficient
var coofficient_6_month = 1.1
var coofficient_12_month = 1.15
var coofficient_24_month = 1.2
var coofficient_36_month = 1.25
var coofficient_48_month = 1.35

//html elements
let fullname_input = document.getElementById("fullname_input")
let credit_amount_input = document.getElementById("credit_amount_input")
let credit_duration_input = document.getElementById("credit_duration_input")
let salary_input = document.getElementById("salary_input")
let fullname_p = document.getElementById("fullname")
let credit_amount_p = document.getElementById("credit_amount")
let credit_duration_p = document.getElementById("credit_duration")
let customer_salary_p = document.getElementById("customer_salary")
let total_credit_amount_p = document.getElementById("total_credit_amount")
let monthy_pay_p = document.getElementById("monthy_pay")
let salary_rate_p = document.getElementById("salary_rate")
let status_p = document.getElementById("status")
let confirm_credit_button = document.getElementById("confirm_credit")
let fullname 
let credit_amount 
let credit_duration 
let customer_salary

//writing results to html elements
function writeInputValue(){
    // Define variables that get values of input
    fullname = fullname_input.value;
    credit_amount = parseFloat(credit_amount_input.value);
    credit_duration = parseInt(credit_duration_input.value)
    customer_salary = parseFloat(salary_input.value)

    if(fullname.trim() !="" && credit_amount !=NaN && credit_duration != NaN && customer_salary != NaN){
        //Variables that are derived from user's promts
        let total_credit_amount = (credit_amount * window[`coofficient_${credit_duration}_month`]).toFixed(2)
        let monthy_pay = ((credit_amount * window[`coofficient_${credit_duration}_month`])/credit_duration).toFixed(2)
        let salary_rate = customer_salary*0.6
    
        // write values to html elements
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
            confirm_credit_button.disabled=false
            if(confirm_credit_button.disabled==false){
                confirm_credit_button.addEventListener("click",function(){
                    alert("Credit confirmed succesfully");
                })
            }
        }else{
            status_p.innerText = `Status: Declined`
            status_p.style.color = "red"
            confirm_credit_button.style.backgroundColor = "gray"
            confirm_credit_button.disabled=true
        }
    }
}
let submit_input = document.getElementById("submit_input")
submit_input.addEventListener("click",function(){
    writeInputValue();
    fullname_input.value = fullname
    fullname_input.disabled = true
    salary_input.value = customer_salary;
    salary_input.disabled = true
    submit_input.disabled=true;
    credit_amount_input.addEventListener("input",function(){
        credit_amount = parseFloat(credit_amount_input.value);
        credit_duration = parseInt(credit_duration_input.value);
        writeInputValue();
    })
    credit_duration_input.addEventListener("input",function(){
        credit_amount = parseFloat(credit_amount_input.value);
        credit_duration = parseInt(credit_duration_input.value);
        writeInputValue();
    })
})

function submitCredit(){
    event.preventDefault()
}
