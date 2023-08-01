const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')
var currentDate = new Date()

morgan.token('req-body', (req) => {
    return JSON.stringify(req.body);
  })

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'))
app.use(express.static('build'))
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const overall = Math.max(...persons.map(n => n.id))
app.get(`/api/persons`, (req, res) => {
    res.json(persons)
})

app.get(`/info`, (req, res) => {
    res.send(`<p> Phonebook has info for ${overall} people </p> <p> ${currentDate}</p>`)
})

app.get(`/api/persons/:id`, (req, res) => {
    Person.findById(request.param.id)
        .then(note => {
            response.json(person)
        })
})

app.delete(`/api/persons/:id`, (req, res) => {
    const id = Number(req.params.id)
    const person = persons.map(person => person.id !== id)
    res.status(204).end()
})

app.post(`/api/persons`, (req, res) => {
    const randomID = Math.floor(Math.random() * 10001 )
    const body = req.body
    const uniqueName = persons.find(person => person.name == body.name)
    console.log(body)
    if (body.name === undefined) {
        return res.status(400).json({ 
          error: 'name is missing' 
        })
    }
    else if(body.number === undefined) {
        return res.status(400).json({
            error: "number is missing"
        })
    }
    else if(uniqueName) {
        return res.status(400).json({
            error: 'name must be uniques'
        })
    }
    
    const person = {
        id: randomID,
        name: body.name,
        number: body.number
    }
    person.save().then(savedPerson => { 
        response.json(savedPerson)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
