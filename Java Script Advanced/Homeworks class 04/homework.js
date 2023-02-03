let baseUrl = "https://swapi.dev/api/planets/"
let curentPage = 1
let table = document.getElementById("table");

function getPlanet(page){
    let planetApi = `${baseUrl}?page=${page}`;
    fetch(planetApi)
    .then(function(response){
        let data=response.json()
        return data
    }).then(function(data){
        console.log(data)
        let resultHead = table.getElementsByTagName('thead')[0]
        let resultBody = table.getElementsByTagName('tbody')[0]
        resultHead.innerHTML = `
            <tr>
                <th>Planet Name</>
                <th>population</>
                <th>Climate</>
                <th>Gravity</>
            </tr>
        `;
        resultBody.innerHTML = "";
        for( let planet of data.results){
            resultBody.innerHTML += `  
            <tr> 
                <td> ${planet.name} </td>
                <td> ${planet.population} </td>
                <td> ${planet.climate} </td>
                <td> ${planet.gravity} </td>
            </tr>
            `;           
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