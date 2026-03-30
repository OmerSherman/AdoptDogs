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

    let boneFacts = [
        "Dogs have about 1,700 taste buds. Humans have about 9,000!",
        "A dog's nose print is unique, just like a human fingerprint.",
        "Dogs can understand up to 250 words and gestures.",
        "Puppies are born deaf — they can't hear until they are about 21 days old.",
        "Dogs curl up in a ball when sleeping to protect their organs — a holdover from their days in the wild.",
        "A dog's sense of smell is 10,000 to 100,000 times more acute than a human's.",
        "The Basenji is the only breed of dog that can't bark — but they can yodel!",
        "Dogs have three eyelids: upper, lower, and a third lid called a nictitating membrane.",
        "When dogs kick after going to the bathroom, they are using scent glands on their paws to mark their territory.",
        "Greyhounds can run up to 45 miles per hour, making them the fastest dog breed."
    ]

    let bonesContainer = document.getElementById("bones-container")
    let usedFacts = []

    for(let i = 0; i < 6; i++){
        let bone = document.createElement("span")
        bone.classList.add("bone")
        bone.textContent = "🦴"
        bone.style.top = (10 + Math.random() * 75) + "%"
        bone.style.left = (5 + Math.random() * 85) + "%"
        bone.style.transform = "rotate(" + (Math.random() * 360) + "deg)"

        bone.addEventListener("click", function(){
            // pick a fact that hasn't been shown yet
            if(usedFacts.length >= boneFacts.length) usedFacts = []
            let factIndex
            do {
                factIndex = Math.floor(Math.random() * boneFacts.length)
            } while(usedFacts.indexOf(factIndex) !== -1)
            usedFacts.push(factIndex)

            // create overlay + fact popup
            let overlay = document.createElement("div")
            overlay.classList.add("bone-fact-overlay")

            let popup = document.createElement("div")
            popup.classList.add("bone-fact")
            popup.innerHTML = '<span class="bone-fact-label">🦴Fun Fact!🦴</span>' +
                '<p>' + boneFacts[factIndex] + '</p>' +
                '<button class="bone-fact-close">Got it!</button>'

            document.body.appendChild(overlay)
            document.body.appendChild(popup)

            // hide the bone that was clicked
            bone.style.display = "none"

            function closePopup(){
                overlay.remove()
                popup.remove()
            }

            popup.querySelector(".bone-fact-close").addEventListener("click", closePopup)
            overlay.addEventListener("click", closePopup)
        })

        bonesContainer.appendChild(bone)
    }
})
