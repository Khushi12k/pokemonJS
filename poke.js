let main=document.querySelector("main")
let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
let loadBtn=document.querySelector("footer button")
let searchPok=document.querySelector("#searchByName")
let finalData=[]
let offset=0;

async function fetchUrl(urlToFeTCH){
    let response=await fetch(urlToFeTCH)
    let result=await response.json()
    return result
}


async function fetchAgain(data){
const promises=[]
for(let i=0; i<data.results.length;i++){
    promises.push(fetchUrl(data.results[i].url))
}
finalData.push(...(await Promise.all(promises)))
return finalData
}

window.addEventListener("load",async()=>{
    const data= await fetchUrl(url)
    // console.log(data)
    displayData(await fetchAgain(data))
})


 function displayData(arr){
    main.innerHTML=""
    for(let i=0;i<arr.length; i++){
let wrapper=document.createElement("div")
wrapper.classList.add("wrapper")
main.append(wrapper)

let image=document.createElement("img")
image.classList.add("image")
image.src=arr[i].sprites.other.dream_world.front_default;
// console.log(image)
wrapper.append(image)

let heading=document.createElement("h3")
heading.classList.add("heading")

heading.innerText=arr[i].name
wrapper.append(heading)


    }
}


loadBtn.addEventListener("click", async()=>{
    offset=offset+20;
    const moreImages=await fetchUrl('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' + offset)
    displayData(await fetchAgain(moreImages))
})

searchPok.addEventListener('keyup',(e)=>{
    const filterPok = finalData.filter(p => p.name.includes(e.target.value));
    // console.log(filterPok)
    displayData(filterPok)
})

