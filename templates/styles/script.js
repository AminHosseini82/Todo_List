function displayData(){
    let data = new Date()
    let date = data.toString().split(" ")
    console.log(date)
}

window.onload = function(){
    displayData()
}

