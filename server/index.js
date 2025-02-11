const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const movieFilePath = path.join(__dirname,'data.json')

function readMoviesData(){
  try{
    const data = fs.readFileSync(movieFilePath,'utf8')
    return JSON.parse(data)
  }catch(error){
    console.error("Error reading json file",error);
    return [];
  }
}

app.get('/movies', (req, res) => {
  const movies = readMoviesData();
  res.json(movies)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})