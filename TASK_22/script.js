let countries = []
// create request
const getRequest = new XMLHttpRequest();
// open
getRequest.open("GET","https://raw.githubusercontent.com/linssen/country-flag-icons/master/countries.json")
// onload
getRequest.onload = () =>{
    countries = JSON.parse(getRequest.responseText);
    let main_container = document.querySelector(".main-container")
    countries.map((obj,index) => {
        const countries_card = document.createElement("div")
        countries_card.className ="countries-card"
        const countries_img = document.createElement("img")
        countries_img.src = obj.file_url;
        const countries_name = document.createElement("p")
        countries_name.innerText = obj.name;
        const countries_about = document.createElement("a")
        countries_about.innerText = "Ətraflı"
        countries_about.href = `https://en.wikipedia.org/${obj.url}`
        countries_card.append(countries_img,countries_name,countries_about)
        main_container.append(countries_card)
    })
}
// send
getRequest.send();

// response


// alpha3: "AFG"
// file_url: "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
// license: "Public domain"
// name: "Afghanistan"
// url: "/wiki/Afghanistan"