// let container=document.querySelector(".container")
// let url='https://pokeapi.co/api/v2/pokemon?limit=20&offse

let main=document.querySelector("main")
let loadMoreButton=document.querySelector("footer button")
let searchPokemon=document.querySelector("#sechByName")

let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

async function fetchUrl(urlToFeTCH){
    let response=await fetch(urlToFeTCH)
    let result=await response.json()
    return result
}
// fetchUrl(url)


async function fetchAgain(data){
const promises=[]
for(let i=0; i<data.results.length;i++){
    promises.push(fetchUrl(data.result[i].url))
}

finalData.push(promises.all((promises)))
return finalData
}

window.addEventListener("load",async()=>{
    const data= await fetchUrl(url)
    console.log(data)
    displayData(await fetchAgain(data))
})

function displayData(arr){
    for(let i=0;i<arr.length; i++){
let wrapper=document.createElement("div")
wrapper.classList.add("wrapper")
let heading=document.createElement("heading")
heading.classList("heading")
heading.textContent=arr[i].name
main.append(wrapper)
wrapper.append(heading)
    }
}
displayData()

