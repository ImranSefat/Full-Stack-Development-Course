const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')


app.use(express.json())
app.use(cors())

const PORT = 3001

const db = mysql.createConnection({
    host : 'localhost',
    port : "8889",
    user: 'root',
    password: 'root',
    database : 'Notes'
})



app.get('/', (req, res) => {
    res.send({
        "message": "Hello from a Node Server!"
    })
})

app.get('/notes', (req, res) => {
    db.query("SELECT * FROM notes", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.get('/notes/id', (req, res) => {

    const id = req.body.id

    db.query(`SELECT * FROM notes WHERE id = ${id}`, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


app.post('/notes/add', (req, res) => {
    const title = req.body.title
    const details = req.body.details
    
    
    // console.log(title, details)
    db.query(`INSERT INTO notes(title, details) VALUES('${title}', '${details}')`, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log("Success")
            res.send(result)
        }
    })
})


app.put('/notes/update', (req, res) => {
    const title = req.body.title
    const details = req.body.details
    const id = req.body.id

    // console.log(title, details)
    db.query(`UPDATE notes SET title = '${title}', details = '${details}' WHERE id = ${id}`, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log("Success")
            res.send("Success")
        }
    })
})




app.delete('/notes/delete/id', (req, res) => {
    const id = req.body.id
    console.log("Note id is : " +  id)

    db.query(`DELETE from notes where id = ${id}`, (err, result) => {
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log("Deleted!!!")
            res.send(result)
        }
    })
})



app.listen(PORT, () => {
    console.log("Server is running on PORT 3001")
})


