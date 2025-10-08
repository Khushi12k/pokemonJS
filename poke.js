let main=document.querySelector("main")
let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
let finalData=[]

async function fetchUrl(urlToFeTCH){
    let response=await fetch(urlToFeTCH)
    let result=await response.json()
    return result
}
// fetchUrl(url)
window.addEventListener("load",async()=>{
    const data= await fetchUrl(url)
    // console.log(data)
    displayData(await fetchAgain(data))
})

async function fetchAgain(data){
const promises=[]
for(let i=0; i<data.results.length;i++){
    promises.push(fetchUrl(data.results[i].url))
}

finalData.push(...(await Promise.all(promises)))
return finalData
}



async function displayData(arr){
    for(let i=0;i<arr.length; i++){
let wrapper=document.createElement("div")
wrapper.classList.add("wrapper")
let heading=document.createElement("heading")
heading.classList.add("heading")

heading.innerText=arr[i].name
// console.log(heading)
main.append(wrapper)
wrapper.append(heading)
let image=document.createElement("img")
image.classList.add("image")
image.src=arr[i].sprites.other.dream_world.front_default;
// console.log(image)
wrapper.append(image)

    }
}


