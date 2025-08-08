const express=require('express')
const PORT=3000;

const app=express();
app.use(express.json()) //parse json
app.get("/",(req,res)=>{
    res.send("Hello World, Welcome")
})
app.listen(PORT,()=>{
    console.log(`success,running in the http://localhost:${PORT}`)
})

console.log("Hello from Server")