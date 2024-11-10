const { OpenAI } = require("openai");
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app = express();

const formatAI = require("./Helpers/aiFormat");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 8080;
const openai = new OpenAI({ apiKey: process.env.OPEN_AI })
const introPrompt = "Hello, You are Dr.Amazing, the world's best doctor. " +
    "You can identify any disease, infection, sickness, ailments and anything like. " +
    "I am one of your patients and suffering an unknown disease, infection, sickness, ailments and anything like. " +
    "I will be listing off the symptoms that I am suffering with and are tasked in identifying the potential disease, infection, sickness, ailments and anything like I might be suffering from and state potential remedies. " +
    "Please format your response in a numerical list, for example (1.name:’disease1’, remedies:‘remedies1’, name:’disease2’, remedies:‘remedies2’). The symptoms I am suffering from ";

app.get('/test', (req, res) => {
    try {

        let temp = formatAI("I'm not a doctor, but I can help you understand what coughing up blood might indicate. It's crucial to consult a" +
            "healthcare professional as soon as possible, as this symptom can be serious. Here are some potential causes along with" +
            "general information on remedies:" +

            "1. **Name:** Pulmonary Embolism" +
            "**Remedies:** Immediate medical attention is necessary; antithrombotic medications may be used." +

            "2. **Name:** Tuberculosis" +
            "**Remedies:** Antibiotic treatment over several months, including medications such as isoniazid and rifampin." +

            "3. **Name:** Lung Cancer" +
            "**Remedies:** Treatment may include surgery, chemotherapy, radiation therapy, or targeted therapies, depending on the" +
            "stage and type of cancer." +

            "4. **Name:** Bronchitis" +
            "**Remedies:** Rest, increased fluid intake, over-the-counter cough medications, and in some cases, prescription" +
            "bronchodilators or antibiotics if a bacterial infection is suspected." +

            "5. **Name:** Pneumonia" +
            "**Remedies:** Antibiotics for bacterial pneumonia, rest, fluids, and possibly hospitalization in severe cases." +

            "6. **Name:** Chronic Obstructive Pulmonary Disease (COPD)" +
            "**Remedies:** Smoking cessation, bronchodilators, steroids, pulmonary rehabilitation, and oxygen therapy as needed." +

            "7. **Name:** Vascular Malformation or Avulsion" +
            "**Remedies:** Treatment may include surgery to repair the vessel, depending on the severity and location of the issue." +

            "It's important to note that coughing up blood, also known as hemoptysis, can be caused by a range of conditions, some" +
            "serious and some not. You should seek help from a healthcare provider to get a thorough examination, possible imaging" +
            "studies, and appropriate treatment.");

        console.log(typeof (temp));
        res.send({ "temp": temp });
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }

})

app.post('/', async (req, res) => {
    // console.log(req.body.hello);

    console.log(req.body.prompt);
    if (req.body.prompt) {
        let fullPrompt = introPrompt + req.body.prompt
        // console.log(fullPrompt);
        var testvar;
        try {
            testvar = await test(fullPrompt);
            // testvar = "I'm here to help! Please provide the list of symptoms you are experiencing, and I'll do my best to identify potential diseases or conditions along with remedies.";
            console.log(testvar);


        } catch (error) {
            console.log("something went wrong");
            console.log(error);
        }
        // console.log(formatAI(testvar.content));
        let ret = {};
        ret.disease = formatAI(testvar.content+"*");
        // ret.disease = formatAI(testvar+"*");
        console.log(ret.disease);
        if (Object.keys(ret.disease).length === 0) {
            console.log("try again\n");
            testvar = await test(fullPrompt);

            ret.disease = formatAI(testvar.content+"*");
            if (Object.keys(ret.disease).length === 0) {
                res.send({"error":"Sorry but I don't understand your symptoms, can you re-write your prompt to be more clearer."});
            }
            else {
                res.send(ret);

            }
        }
        else {
            res.send(ret);
        }


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