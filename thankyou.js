function load_ty(){
    let dog_id = getDogIdFromURL()
    
    let dog_img = document.getElementById('dog_img_thankyou')
    let dog_name = document.getElementById('dog_name_thankyou')

    getDogById(dog_id).then(response => {
        dog_img.src=response['first_image_url']
        dog_name.textcontent= response['name']
    })
}
load_ty()