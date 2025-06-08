const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { readdirSync } = require('fs')
const handleError = require('./middlewares/error')
// const campingRoute = require('./routes/campingRoute')
// const profileRoute = require('./routes/profileRoute')

require('dotenv/config')
const { clerkMiddleware } = require('@clerk/express')


const port = 5000

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(morgan('dev'))
app.use(clerkMiddleware())




// ดึงไฟล์ทั้งหมด ใน folder routes และ require มาใช้ (ด้วย readdirSync)
readdirSync('./routes').map((item) => {
    // console.log(item)
    return app.use('/api', require(`./routes/${item}`))
})
// app.use('/api', campingRoute)
// app.use('/api', profileRoute)



app.use(handleError)


app.listen(port, () => console.log(`Server is running of port ${port}`))