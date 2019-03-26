const express = require('express');
const app = express()
const fs = require('fs')

app.use(express.json());

// app.get('/ask_question',(req,res)=>{
//     fs.readFile('chatbot.json',(err,data)=>{
        
        
        
//         var jsondata = fs.readFileSync('chatbot.json')
//         var ressponses = JSON.parse(jsondata);
        
//         for(let i = 0; i < ressponses.length; i++){
            
//         if(err){
//             console.log("something went wrong")
            
//         }
//         else if( (user_key  == ressponses[i])){

//             return res.json(ressponses[i])
            
//             }
//         }
//     })
// })

app.get('/question  ',(req,res)=>{
    fs.readFile('information.json',(err,data)=>{
        if(err){
            console.log("something went wrong")
        }
        else{
            var data = JSON.parse(data.toString())
            return res.json(data)
        }
    })
}),

app.get("/navgurukul/:info", (req,res) => {
    fs.readFile('chatbot.json',(err,data)=>{
    var body = req.params.info
    var data1 = JSON.parse(data);
    var out = data1[body]
    
    return res.json(out);

    })
})


const port=process.env.PORT || 3000

app.listen(port, () => console.log('server is listening'));
