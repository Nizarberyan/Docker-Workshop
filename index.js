import express from "express"
import mongoose from "mongoose"

const app = express()
const PORT = process.env.PORT || 3000

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp')

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

