const mock_server_url = "https://70600144-335d-4dbe-bc76-01bd4f7145c1.mock.pstmn.io/dogs"
let dogs_number = 6

async function fetchAllDogs(){
    let response = await fetch(mock_server_url)
    let data = await response.json()
    return data
}

async function fetchDogById(id){
    let response = await fetch(mock_server_url + "?id=" + id)
    let data = await response.json()
    return data
}

async function getDogById(id){
    return fetchDogById(id)
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

function formatBadge(value){
    let text = formatBoolean(value)
    let badgeClass = "badge-unknown"
    if(value === true) badgeClass = "badge-yes"
    if(value === false) badgeClass = "badge-no"
    return '<span class="badge ' + badgeClass + '">' + text + '</span>'
}
