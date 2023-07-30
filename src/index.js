// window.fetch(url)
// .then(response => response.json())
// .then(data => data.data.forEach(element => console.log(element.name))
// )                        
// ----> Promises

const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#container')

function formatPrice(price) {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "EUR"
    }).format(price)

    return newPrice
}


async function fetchData(link) {
    const response = await window.fetch(link)
    const data = await response.json()

    const allItems = []
    
    data.data.forEach(element => {
        // Crear elementos
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('div')
    
        // Crear contenedor
        const container = document.createElement('div')
        container.append(image, title, price)
        allItems.push(container)

        // Llenar los nodos con información de la API
        image.src = `https://platzi-avo.vercel.app/${element.image}`
        title.textContent = element.name
        price.textContent = formatPrice(element.price)

        // Estilos 
        container.className = "w-56 h-auto border rounded-md p-2"
        title.className = "font-bold text-green-400 border-t-2"
        price.className = "text-gray-300"
    });
    appNode.append(...allItems)
}                                       // ----> Async / Await

fetchData(url)
