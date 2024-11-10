const {OpenAI} =require ("openai");
require("dotenv").config();
const express=require('express');
const app=express();
const port=8080;
const openai = new OpenAI({apiKey:process.env.OPEN_AI})



app.get('/',async (req,res)=>{
    console.log("Hello");
    var testvar;
    try {
        testvar=await test("Write a haiku about recursion in programming");
        console.log(testvar);
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }

    res.send(testvar);
})
app.listen(port,()=>{
    console.log(`App is listening at port:${port}`)
})
async function test(params) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: params,
            },
        ],
    });
    return completion.choices[0].message;
}