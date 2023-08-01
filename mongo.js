const mongoose = require('mongoose')

if (process.argv.length !== 5 && process.argv.length !== 3 ) {
  console.log('Give password, name and number or only password')
  console.log(process.argv.length)
  process.exit(1)
}
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url =
  `mongodb+srv://SunSad:${password}@cluster0.wg128d5.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number
})

if (process.argv.length === 5) 
{
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  }) 
}
else if (process.argv.length === 3)
{
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}
