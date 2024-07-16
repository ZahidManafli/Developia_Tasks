let gray_circle = document.getElementById("grey_circle")
let orange_circle = document.getElementById("orange_circle")
let circle_image = document.getElementById('circle_image')
let right_side = document.getElementById("right_side")
let tag_of_form = document.getElementById("tag_of_form")

window.addEventListener("scroll",function(){
    let scrollY = this.scrollY;
    console.log(scrollY)
    if(scrollY>300){
        gray_circle.style.animation = "gray_circle_animation 2s forwards"
        orange_circle.style.animation = "orange-circle_animation 1.8s forwards"
        circle_image.style.animation = "rotate 2s forwards"
        right_side.style.animation = "right_side_animation 2s forwards"
    }else{
        gray_circle.style.animation = "oposite_gray_circle_animation 1s"
        orange_circle.style.animation = "oposite_orange-circle_animation 1s"
        circle_image.style.animation = "oposite_rotate 1"
        right_side.style.animation = "oposite_right_side_animation 2"
    }

    if(scrollY >1075){
        tag_of_form.style.animation = "tag_of_form_animation 2s forwards"
    }else{
        tag_of_form.style.animation = "oposite_tag_of_form_animation 1s forwards"
    }
})