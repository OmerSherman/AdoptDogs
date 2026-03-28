function load_dog_data(){
    let adopt_url = "adopt.html?id="
    //get all the DOM elements 
   
    let dog_name_h = document.getElementById("DogName")
    let dog_img_h = document.getElementById("DogImg");
    let breed_h = document.getElementById("Breed");
    let age_h = document.getElementById("Age");
    let house_trained_h = document.getElementById("House_Trained");
    let vaccinated_h = document.getElementById("Vaccinated");
    let story_h = document.getElementById("Story");
    let adoption_link_h = document.getElementById("Adoption_Link");
    let next_h = document.getElementById("next-btn")
    let prev_h = document.getElementById("prev-btn")
    let index_h = document.getElementById("index_b")
    let dog_id = getDogIdFromURL()//Get the id of the dog from the URL
    
    // load all the DOM elements with values 
    getDogById(dog_id).then(response => {
        //response is expected to be JSON object of a dog
        dog_name_h.textContent = response['name']
        dog_img_h.src = response['first_image_url']
        breed_h.textContent = response['breed']
        age_h.textContent = response['age']
        house_trained_h.textContent = "House Trained: ".concat(formatBoolean(response['house_trained'])) //format boolean to yes/no and load to DOM
        vaccinated_h.textContent ="Vaccinated: ".concat( formatBoolean(response['vaccinated']))//format boolean to yes/no and load to DOM
        story_h.textContent = response['story']
        adoption_link_h.href = adopt_url.concat(dog_id)
        //set the next and prev buttons
        let dog_url = "dog.html?id="
        if(dog_id != 1){
            prev_h.addEventListener("click" ,()=>{
                let new_dog_id = parseInt(dog_id)-1
                window.location.href = dog_url.concat(new_dog_id)
            } )
            prev_h.disabled  = false
        }
        else{
            prev_h.disabled  = true
        }
        if(dog_id != dogs_number){
            next_h.addEventListener("click" ,()=>{
                let new_dog_id = parseInt(dog_id) + 1
                window.location.href = dog_url.concat(new_dog_id)
            } )
            next_h.disabled = false
        }
        else{
            next_h.disabled = true
        }
        //set the back to list button
        index_h.addEventListener("click", () => {
            window.location.href = "index.html"
        })

    })
}
load_dog_data()

