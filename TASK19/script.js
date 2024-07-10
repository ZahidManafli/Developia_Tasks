let username_login = document.getElementById("username_login")
let password_login = document.getElementById("password_login")
let login_button = document.getElementById("login_button")
let username_register = document.getElementById("username_register")
let password_register = document.getElementById("password_register")
let confirm_password_register = document.getElementById("confirm_password_register")
let register_button = document.getElementById("register_button")
let body_of_modal3 = document.getElementById("body_of_modal3")
let footer_of_modal3 = document.getElementById("footer_of_modal3")
let exampleModalLabel3 = document.getElementById("exampleModalLabel3")
let username="";
let password="";
let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

login_button.addEventListener("click",function(){
    exampleModalLabel3.innerText = "Məlumatlar yoxlanılır..."
    setTimeout(function(){
        if(username==username_login.value.trim() && password==password_login.value.trim()){
            exampleModalLabel3.innerText = "Əsas Səhifəyə yönləndirilir..."
            body_of_modal3.innerHTML = `
            <i id="check" class="fa fa-check"></i>
            `
            setTimeout(function(){
                window.location.href = "http://127.0.0.1:5501/DERS23/homepage/index.html"
            },1000)
        }else{
            exampleModalLabel3.innerText = "Məlumatlar yanlışdır..."
            body_of_modal3.innerHTML = `
            <i id="close" class="fa fa-close"></i>
            `
            footer_of_modal3.innerHTML = `
            <button id="close_modal3" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            `
            setTimeout(function(){
                let close_modal3 = document.getElementById("close_modal3")
                close_modal3.click()
                exampleModalLabel3.innerText = ""
                body_of_modal3.innerHTML = `
                <div class="loading"></div>
                `
                footer_of_modal3.innerHTML = ""
            },2000)
        }
    },3000)
})

register_button.addEventListener("click",function(){
    exampleModalLabel3.innerText = "Məlumatlar yoxlanılır..."
    console.log(username_register.value.trim())
    console.log(regExp.test(password_register))
    console.log(confirm_password_register==password_register)
    setTimeout(function(){
        if(username_register.value.trim() != "" && regExp.test(password_register.value) == true && confirm_password_register.value==password_register.value){
            exampleModalLabel3.innerText = "İstifadəçi uğurla əlavə olundu!"
            body_of_modal3.innerHTML = `
            <i id="check" class="fa fa-check"></i>
            `
            username = username_register.value;
            password = password_register.value;
            footer_of_modal3.innerHTML = `
            <button id="close_modal3" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            `
            setTimeout(function(){
                let close_modal3 = document.getElementById("close_modal3")
                close_modal3.click()
                exampleModalLabel3.innerText = ""
                body_of_modal3.innerHTML = `
                <div class="loading"></div>
                `
                footer_of_modal3.innerHTML = ""
            },2000)
            username_register.value =""
            password_register.value = ""
            confirm_password_register.value = ""
        }else{
            exampleModalLabel3.innerText = "Məlumatlar düzgün doldurulmamışdır..."
            body_of_modal3.innerHTML = `
            <i id="close" class="fa fa-close"></i>
            `
            footer_of_modal3.innerHTML = `
            <button id="close_modal3" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            `
            setTimeout(function(){
                let close_modal3 = document.getElementById("close_modal3")
                close_modal3.click()
                exampleModalLabel3.innerText = ""
                body_of_modal3.innerHTML = `
                <div class="loading"></div>
                `
                footer_of_modal3.innerHTML = ""
            },2000)
        }
    },3000)
})

