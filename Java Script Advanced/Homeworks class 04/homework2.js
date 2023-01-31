/*After the user clicks the button to get the first 10 planets, 
a button should be shown below the table that says: NEXT 10.
When the button is clicked you should make another call and get the next 10 planets
and change the table contents with information about the next 10 planets.
After the next 10 planets are shown the button NEXT 10 should disapear and a 
new button PREVIOUS 10 should appear. The previous button should return the first 
10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.*/

let baseUrl = "https://swapi.dev/api/planets/"
let curentPage = 1
function getPlanet(page){
    let planetApi = `${baseUrl}?page=${page}`;
    fetch(planetApi)
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        let table = document.getElementById('table');
        table.innerHTML = "";
        for( let planet of data.results){
        table.innerHTML += `
                    <tr> 
                        <td> Planet Name </td>
                        <td> ${planet.name} </td>
                    </tr>
                    <tr> 
                        <td> Population </td>
                        <td> ${planet.population}kg </td>
                    </tr>
                    <tr> 
                        <td> Climate </td>
                        <td> ${planet.climate} </td>
                    </tr>
                    <tr> 
                        <td> Gravity </td>
                        <td> ${planet.gravity} </td>
                    </tr>`;           
}})
.catch(function(error){
    console.log('error')
})}
let btn = document.getElementById('btn')

btn.addEventListener("click",function(){
    getPlanet(curentPage)   
})
let NextBtn = document.getElementById('next')
NextBtn.addEventListener("click",function(){
    curentPage ++
    getPlanet(curentPage)
})
let PrevBtn = document.getElementById("prev")
PrevBtn.addEventListener("click",function(){
    curentPage --
    getPlanet(curentPage)
})