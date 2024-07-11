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
let username_regExp = /^[a-zA-Z0-9_]{3,16}$/
let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
register_button.disabled = true;
login_button.disabled = true;

login_button.addEventListener("click",function(){
    if(username_login.value.trim() != "" && password_login.value.trim() != ""){
        exampleModalLabel3.innerText = "Məlumatlar yoxlanılır..."
        setTimeout(function(){
            if(username==username_login.value.trim() && password==password_login.value.trim() && username_login.value.trim() != "" && password_login.value.trim() != ""){
                exampleModalLabel3.innerText = "Əsas Səhifəyə yönləndirilir..."
                body_of_modal3.innerHTML = `
                <i id="check" class="fa fa-check"></i>
                `
                setTimeout(function(){
                    window.location.href = "http://127.0.0.1:5500/TASK19/homepage/index.html"
                },1000)
            }else{
                exampleModalLabel3.innerText = "İstifadəçi tapılmadı..."
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
    }
})

register_button.addEventListener("click",function(){
    if(username_register.value.trim() != "" && password_register.value.trim() != "" && confirm_password_register.value.trim() != ""){
        exampleModalLabel3.innerText = "Məlumatlar yoxlanılır..."
        setTimeout(function(){
            if(username_regExp.test(username_register.value) && username_register.value.trim() != "" && regExp.test(password_register.value) == true && confirm_password_register.value==password_register.value){
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
                password_register.style.border = "1px solid #ced4da"
                confirm_password_register.style.border = "1px solid #ced4da"
                username_register.style.border = "1px solid #ced4da"
                register_button.disabled = true;
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
    }
})

username_register.addEventListener("input",function(){
    if(username_regExp.test(username_register.value)){
        username_register.style.border = "1px solid green"
        if(confirm_password_register.value.trim() != "" && password_register.value.trim() != ""){
            register_button.disabled = false;
        }
    }else{
        username_register.style.border = "1px solid red"
        register_button.disabled=true;
    }
})
username_login.addEventListener("input",function(){
    if(username_regExp.test(username_login.value)){
        username_login.style.border = "1px solid green"
        if(password_login.value.trim() != ""){
            login_button.disabled = false;
        }
    }else{
        username_login.style.border = "1px solid red"
        login_button.disabled=true;
    }
})

password_login.addEventListener("input",function(){
    if(regExp.test(password_login.value)){
        password_login.style.border = "1px solid green"
        if(username_login.value.trim() != ""){
            login_button.disabled = false;
        }
    }else{
        password_login.style.border = "1px solid red"
        login_button.disabled=true;
    }
})

password_register.addEventListener("input",function(){
    if(regExp.test(password_register.value)){
        password_register.style.border = "1px solid green"
        if(confirm_password_register.value.trim() != ""){
            register_button.disabled = false;
        }
    }else{
        password_register.style.border = "1px solid red"
        register_button.disabled=true;
    }
})

confirm_password_register.addEventListener("input",function(){
    if(confirm_password_register.value == password_register.value){
        confirm_password_register.style.border = "1px solid green"
        register_button.disabled = false;
    }else{
        confirm_password_register.style.border = "1px solid red"
        register_button.disabled = true;
    }
})