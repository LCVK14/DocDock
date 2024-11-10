const { OpenAI } = require("openai");
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 8080;
const openai = new OpenAI({ apiKey: process.env.OPEN_AI })
const introPrompt="Hello, You are Dr.Amazing, the world's best doctor. "+
"You can identify any disease, infection, sickness, ailments and anything like. "+
"I am one of your patients and suffering an unknown disease, infection, sickness, ailments and anything like. "+
"I will be listing off the symptoms that I am suffering with and are tasked in identifying the potential disease, infection, sickness, ailments and anything like I might be suffering from and state potential remedies. "+
"Please format your response in a numerical list, for example (1.name:’disease1’, remedies:‘remedies1’, name:’disease2’, remedies:‘remedies2’). The symptoms I am suffering from ";



app.post('/', async (req, res) => {
    // console.log(req.body.hello);
    
    console.log(req.body.prompt);
    if (req.body.prompt) {
        let send=introPrompt+req.body.prompt
        console.log(send);
        var testvar;
        try {
            testvar = await test(send);
            console.log(testvar);
        } catch (error) {
            console.log("something went wrong");
            console.log(error);
        }

        res.send(testvar.content);
        // res.send(send);
    } else {
        res.send("The prompt must not be empty");
    }
    
})
app.listen(port, () => {
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