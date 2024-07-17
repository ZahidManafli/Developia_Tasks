let telephone = {};
function formSubmit(){
    event.preventDefault();
    let brand_name = document.getElementById("name")
    let model_name = document.getElementById("model")
    let storage = document.getElementById("storage")
    let color = document.getElementById("color")
    let url_of_image = document.getElementById("url_of_image")
    let ram = document.getElementById("ram")
    let price = document.getElementById("price")
    let products_container = document.getElementById("products_container")

    telephone.brand_name = brand_name.value;
    telephone.model_name = model_name.value;
    telephone.storage = storage.value;
    telephone.color = color.value;
    telephone.url_of_image = url_of_image.value;
    telephone.ram = ram.value;
    telephone.price = price.value
    products_container.innerHTML += `
    <div class="col-6 p-3">
        <img src=${telephone.url_of_image} class="w-100">
        <p>Brand name: ${telephone.brand_name}</p>
        <p>Model name: ${telephone.model_name}</p>
        <p>Storage: ${telephone.storage}</p>
        <p>RAM: ${telephone.ram}</p>
        <div class="color">
            <p>Color: </p>
            <div id="color_of_car" style="background-color: ${color.value};"></div>
        </div>
        <p>Price: ${telephone.price}</p>
    </div>
    `
}