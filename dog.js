function load_dog_data(){
        let adopt_url = "adopt.html?id="
        //get all the DOM elements 
       
        let dog_name_h = document.getElementById("DogName")
        let dog_name_details_h = document.getElementById("DogName_details")
        let dog_img_h = document.getElementById("DogImg");
        let breed_h = document.getElementById("Breed");
        let age_h = document.getElementById("Age");
        let sex_h = document.getElementById("Sex");
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
            dog_name_h.textContent = response['name'] + " Details"
            dog_name_details_h .textContent = "Name: "+ response['name']
            dog_img_h.src = response['first_image_url']
            breed_h.textContent = "Breed: " + response['breed']
            age_h.textContent = "Age: " + response['age']
            sex_h.textContent = "Sex: " + response['sex']
            house_trained_h.innerHTML = "House Trained: " + formatBadge(response['house_trained'])
            vaccinated_h.innerHTML = "Vaccinated: " + formatBadge(response['vaccinated'])
            story_h.innerHTML = `Story: <br> ${response['story']}`;
            adoption_link_h.href = adopt_url.concat(dog_id)
            
            //add floating hearts on adopt click
            adoption_link_h.addEventListener("click", function(e){
                e.preventDefault()
                let actionsDiv = document.querySelector(".actions")
                for(let i = 0; i < 5; i++){
                    let heart = document.createElement("span")
                    heart.classList.add("floating-heart")
                    heart.textContent = "♥"
                    heart.style.left = (30 + Math.random() * 40) + "%"
                    heart.style.animationDelay = (Math.random() * 0.3) + "s"
                    heart.style.fontSize = (0.9 + Math.random() * 0.8) + "rem"
                    heart.style.color = "#b56576"
                    actionsDiv.appendChild(heart)
                }
                setTimeout(function(){
                    window.location.href = adopt_url.concat(dog_id)
                }, 800)
            })
            //set the next and prev buttons
            let dog_url = "dog.html?id="
            if(dog_id != 1){
                prev_h.addEventListener("click" ,()=>{
                    let new_dog_id = parseInt(dog_id)-1
                    window.location.href = dog_url.concat(new_dog_id)
                } )
                prev_h.style.display = "inline-block"
            }
            else{
                prev_h.style.display = "none"
            }
            if(dog_id != dogs_number){
                next_h.addEventListener("click" ,()=>{
                    let new_dog_id = parseInt(dog_id) + 1
                    window.location.href = dog_url.concat(new_dog_id)
                } )
                next_h.style.display = "inline-block"
            }
            else{
                next_h.style.display = "none"
            }
            //set the back to list button
            index_h.addEventListener("click", () => {
                window.location.href = "index.html"
            })

        })
    }
document.addEventListener("DOMContentLoaded",load_dog_data)  

