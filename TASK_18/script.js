function formSubmit(){
    event.preventDefault();
    let brand_name = document.getElementById("brand_name")
    let model_name = document.getElementById("model_name")
    let year = document.getElementById("year")
    let color = document.getElementById("color")
    console.log(color.value)
    let url_of_image = document.getElementById("url_of_image")
    let products_container = document.getElementById("products_container")
    products_container.innerHTML += `
    <div class="col-6 p-3">
        <img src=${url_of_image.value} class="w-100">
        <p>Brand name: ${brand_name.value}</p>
        <p>Model name: ${model_name.value}</p>
        <p>Year: ${year.value}</p>
        <div class="color">
            <p>Color: </p>
            <div id="color_of_car" style="background-color: ${color.value};"></div>
        </div>
    </div>
    `
}