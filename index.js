document.addEventListener("DOMContentLoaded", function(){
    const dogCards = document.getElementsByClassName("Dog")

    function load_dog_data(dog_card, index){
        let dog_card_img = dog_card.querySelector('img')
        let dog_card_h2 = dog_card.querySelector('h2')
        let dog_card_link = dog_card.querySelector('a')
        let dog_link = "dog.html?id="
        getDogById(index).then(response => {
            dog_card_h2.textContent = response["name"]
            dog_card_img.src = response["first_image_url"]
            dog_card_link.href = dog_link.concat(index)
        })
    }

    function load_dogs(){
        let i = 1
        for(element of dogCards){
            load_dog_data(element, i++)
        }
    }
    load_dogs()
})
