function load_adopt(){
    let thankyou_url ="thankyou.html?id="
    let title = document.getElementById("adopt_title")
    let img = document.getElementById("img")
    let form = document.getElementById("adopt_form")
    let dog_id = getDogIdFromURL()
    getDogById(dog_id).then(response => {
        //response is expected to be JSON object of a dog
        title.textContent= "Adopt ".concat(response['name'])
        img.src =response["first_image_url"]
        }
    )
    form.addEventListener('submit', function(event){
        event.preventDefault();
        window.location.href=thankyou_url.concat(dog_id)
    })
}
load_adopt()