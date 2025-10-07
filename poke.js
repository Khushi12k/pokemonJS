let container=document.querySelector(".container")
let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

async function fetchurl(){
    let response=await fetch(url)
    let result=await response.json()
    console.log(result)
     console.log(result.results)

     let arr=result.results
     for (let i=0; i<arr.length; i++){
        let nameText=document.createElement("div")
        nameText.innerText=arr[i].name
        container.append(nameText)

        let test= result.results[i].url
        let pokemonimage= await fetch(test)
        let data =await pokemonimage.json()
        console.log(data);
        let storeImg=data.sprites.other.dream_world.front_default
        console.log(storeImg)
        

        let image=document.createElement("img")
        
        image.classList.add("image")
        image.src=storeImg
        container.append(image)

        // let div=document.createElement("div");
        // div.innerText=results[i].url;

     }
     
    // let test= result.results[0].url
    // let pokemonimage= await fetch(test)
    // let data =await pokemonimage.json()
    // let image=data.sprites.back_default;

    console.log(pokemonimage)
    console.log(data)
}
fetchurl()