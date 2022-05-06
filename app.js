const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./route')



const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())

app.use('/contacts', router)




app.get('*', (req, res)=>{
    res.send('Please use correct route')
})

const PORT = process.env.PORT || 8080
mongoose.connect(`mongodb://localhost:27017/mydb`, {
    useNewUrlParser: true
}).then(()=>{
    app.listen(PORT, (req, res)=>{
        console.log('Server is running on port ' + PORT)
})

})
.catch(e =>{
    console.log(e)
})

