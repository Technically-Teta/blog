require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./db/db-connection.js')

const app = express();
const PORT = process.env.PORT || 3003;
app.use(cors());
app.use(express.json());



// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//API ENDPOINT -- GET

app.get("/", (req, res) => {
    res.json("Hello Blog Server for Samelia's Project");
  });


app.get('/api/verses', async (req, res) =>{
    const URL = "https://bible-api.com/?random=verse";
    try {
      const apiRequest = await fetch(URL);
      const bible = await apiRequest.json();
      console.log(bible)
      res.send(bible.verses);
    } catch (err){
      console.log(err);
    }

})

//first test with postman: 
app.get('/api/subscribers', async (req, res) =>{
    //real connection with the DB 
    try{
        const { rows: contacts } = await db.query('SELECT * FROM subscribers');
        console.log("In the server", subscribers)
        res.send(contacts);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }

})

//first test with postman/entries: 
app.get('/api/entries', async (req, res) =>{
   
    try{
        const { rows: entries } = await db.query('SELECT * FROM entries');
        console.log("In the server", entries)
        res.send(entries);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }

})




//API ENDPOINT -- POST


app.post('/api/subscribers', async (req, res) =>{
 
 const contactInfo ={
   fullname: req.body.fullname,
  email: req.body.email,
  phone: req.body.phone,
  notes: req.body.notes
 };
console.log("In the server", contactInfo)
     try {   
         const contactResult = await db.query(
         "INSERT INTO subscribers (fullname, email, phone, notes) VALUES ($1, $2, $3, $4) RETURNING *",
             [contactInfo.fullname,contactInfo.email,contactInfo.phone, contactInfo.notes]
         );
//        // console.log(contactResult)
         let dbResponse = contactResult.rows[0];
//         //console.log(dbResponse)
         res.json(dbResponse);
     } catch(error){
         console.log(error);
         res.status(400).json({error});
     }
})


app.post('/api/entries', async (req, res) =>{
 
    const entriesInfo ={
     notes: req.body.notes,
     date: req.body.date,
     location: req.body.location
    };
   console.log("In the server", entriesInfo)
        try {   
            const entriesResult = await db.query(
            "INSERT INTO entries (notes, date, location) VALUES ($1, $2, $3) RETURNING *",
                [entriesInfo.notes,entriesInfo.date,entriesInfo.location]
            );

            let dbResponse = entriesResult.rows[0];
               console.log(dbResponse)
            res.json(dbResponse);
        } catch(error){
            console.log(error);
            res.status(400).json({error});
        }
   })










//DELETE FROM events WHERE id=5;
app.delete('/api/contacts/:id', async (req, res) =>{
    try{
    const { id } = req.params;
    const deleteOperation = await db.query("DELETE FROM subscribers WHERE id=$1", [id]);
    console.log(deleteOperation);   
    res.json("The contact was deleted!");
    res.status(200).end()

    } catch(error){
        console.log(error);
        res.status(400).json({error});
    }
})

//UPDATING something in the DB
app.put('/api/contacts/:id', async (req, res) =>{

    try{
    const { id } = req.params;
    const { fullname, email, phone, notes }  = req.body;
    const editedContacts = await db.query("UPDATE subscribers SET  fullname =$1, email=$2, phone=$3, notes=$4 WHERE id = $5 RETURNING *", [fullname, email, phone, notes, id]);
    res.json(editedContacts.rows[0])
    
   } catch(error){
    console.log(error);
    res.status(400).json({error});
   }

    
 })


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));

