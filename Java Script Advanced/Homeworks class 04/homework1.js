/*Create an html page with a table and a button. 
When the button is clicked show results for the first 10 planets from the Star Wars api.
The information in the table are:

Planet Name
Population
Climate
Gravity
There should be a function that makes the call to the api for the planets ( should have URL for 
a parameter ) There should be a function that prints planets in to the
table **API URL: ** https://swapi.dev/api/planets/?page=1
let baseUrl = "https://swapi.dev/api/planets/"
function getPlanet(page){
let planetApi = `${baseUrl}?page=${page}`;
let btn = document.getElementById('btn')
btn.addEventListener("click",function(){
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
}}) .catch (function(error){console.log("error")})
    }) 
}
getPlanet(1)*/

/*function PrintPlanet(results){
    
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
    };
    
}*/
let baseUrl = "https://swapi.dev/api/planets/"
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
    getPlanet(1)   
})

