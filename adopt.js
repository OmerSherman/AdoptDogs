 function load_adopt(){
        let thankyou_url = "thankyou.html?id="
        let title = document.getElementById("adopt_title")
        let img = document.getElementById("img")
        let form = document.getElementById("adopt_form")
        let dog_id = getDogIdFromURL()
        getDogById(dog_id).then(response => {
            //response is expected to be JSON object of a dog
            title.textContent = "Adopt ".concat(response['name'])
            img.src = response["first_image_url"]
        })
        form.addEventListener('submit', function(event){
            event.preventDefault();
            //post to API 
            fetch(mock_server_url + "/" + dog_id, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: document.getElementById("email").value,
                    fullname: document.getElementById("fullname").value,
                    phone: document.getElementById("phone_number").value
                })
            }).then(() => {
                window.location.href = thankyou_url.concat(dog_id)
            })
        })
    }
document.addEventListener("DOMContentLoaded", load_adopt)