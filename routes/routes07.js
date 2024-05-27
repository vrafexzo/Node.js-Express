const express = require('express')
const path=require('path')

const router=express.Router()


router.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views','form.html'))  
})

router.post('/page2', (req, res) => {
    console.log(req.body);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express Page 2</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #4F6F52;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: #343a40;
                }
                .container {
                    text-align: center;
                    background-color: #000000;
                    border: 1px solid #dee2e6;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    max-width: 500px;
                    width: 100%;
                }
                h1 {
                    color: #4F6F52;
                }
                p {
                    font-size: 1.2em;
                    color: #4F6F52;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello from Express Page 2</h1>
                <p>Hello, ${req.body.name}</p>
            </div>
        </body>
        </html>
    `);
});


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../views','home.html'))  
})

module.exports=router