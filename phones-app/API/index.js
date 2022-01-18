const express = require('express')
const app = express()

app.use(express.json())

let phones = [
    {
        "id":0,
        "name":"gsdvfdg",
        "manufacturer": "Apple",
        "description": "lo que sea",
        "price": 48484,
        "imageFileName":'ggrgg',
        "screen": "564 gjdjg",
        "processor": "A49484",
        "ram": 2
    },
    {
        "id":1,
        "name":"gsdvfdg",
        "manufacturer": "fds",
        "description": "lo que sea",
        "price": 48484,
        "imageFileName":'gww',
        "screen": "564 gjdjg",
        "processor": "A49484",
        "ram": 2
    }
]

app.get('/phones',(request, response) => {
    response.json(phones)
})

app.get('/phones/:id',(request, response) => {
    const id = Number(request.params.id)
    const phone = phones.find(phone => phone.id == id)

    if (phone) {
        response.json(phone)
    } else {
        response.status(404).end()
    }
})

app.delete('/phones/:id',(request,response) => {
    const id = Number(request.params.id)
    const phone = phones.find(phone => phone.id != id)
    response.status(204).end()

})

/*app.post('/phones/:id',(request,response) => {    
    const phone = request.body
    const ids = phones.map(phone => phone.id)
    const maxId = Math.max(...id)

    const newPhone = {
        id: maxId + 1,
        name: phone.name,
        manufacturer: phone.manufacturer,
        price: phone.price,
        imageFileName: phone.imageFileName,
        screen: phone.screen,
        processor: phone.processor,
        ram: phone.ram
    }

    phones = [...phones, newPhone]

    response.json(newPhone)

})*/



const PORT = 8000
app.listen(PORT,() => {  
    console.log(`Server running on ${PORT}`)
})
