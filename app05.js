const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }));

app.get('/page1',(req,res)=>{
    res.send(`
    <form method="post" action="/page2">
        <label for="name-id">Name</label>
        <input type="text" id="name-id" name="name" autofocus></input>
        <button type="submit">Submit</button>
    </form>`)  
})

app.post('/page2',(req,res)=>{
    console.log(req.body)
    res.send(`
    <h1>Hello from express page 2</h1>
    <p>Hello, ${req.body.name}</p>
    `)  
})

app.get('/',(req,res,next)=>{
    res.send('<h1>Hello from express</h1>')
})


app.listen(8000, () => {
    console.log('Server is running at port 8000');
});
