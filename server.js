const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const campingRoute = require('./routes/campingRoute')


const port = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/api', campingRoute)




app.listen(port, () => console.log(`Server is running of port ${port}`))