const mock_server_url = "https://70600144-335d-4dbe-bc76-01bd4f7145c1.mock.pstmn.io/dogs"
let dogs_number = 6
//return a JSON object of a dog. get it from the mockserver 
async function getDogById(id){
    let sufix = "?id=".concat(id)
    let response = await fetch(mock_server_url.concat(sufix))
    let data = await response.json()
    return data
}




function getDogIdFromURL(){
    let params = new URLSearchParams(window.location.search);
    return params.get("id")
}

function formatBoolean(value){
    if(value == true) return "Yes"
    if(value == false) return "No"
    if(value == null) return "Unknown"
}