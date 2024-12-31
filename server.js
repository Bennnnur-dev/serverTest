async function getData(){
    const data = await fetch("./client/scripts/client.js")

    const response = await data.json()

    console.log(response)
}

getData()