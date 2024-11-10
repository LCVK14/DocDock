const { OpenAI } = require("openai");
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app = express();

const formatAI = require("./Helpers/aiFormat");
const useless=require("./Helpers/useless");

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

    const doctorInfoList = [
        {
            name: "Dr. Sarah Lee",
            specialty: "Pulmonologist",
            symptoms: ["cough blood", "coughing blood", "blood coughing", "shortness of breath"],
            address: "123 Main St, Springfield",
            phone: "(123) 456-7890"
        },
        {
            name: "Dr. Maria Gonzales",
            specialty: "Cardiologist",
            symptoms: ["uneven heart beat", "fast heart beat", "shortness of breath", "palpitations"],
            address: "789 Maple Dr, Springfield",
            phone: "(123) 555-0234"
        },
        {
            name: "Dr. David Chen",
            specialty: "Neurologist",
            symptoms: ["seizures"],
            address: "321 Willow Rd, Springfield",
            phone: "(123) 555-0456"
        },
        {
            name: "Dr. Emily White",
            specialty: "Gastroenterologist",
            symptoms: ["abdominal pain", "nausea", "vomiting"],
            address: "654 Pine St, Springfield",
            phone: "(123) 555-0678"
        },
        {
            name: "Dr. Phil Jefferson",
            specialty: "Oncologist",
            symptoms: ["lump", "persistent cough", "unexplained weight loss", "chronic fatigue"],
            address: "101 Cancer Care Blvd, Springfield",
            phone: "(123) 555-0123"
        },
        {
            name: "Dr. Megan Smith",
            specialty: "Dermatologist",
            symptoms: ["rash", "itchy skin", "acne", "eczema", "psoriasis"],
            address: "203 Skin Wellness Rd, Springfield",
            phone: "(123) 555-0345"
        },
        {
            name: "Dr. Henry Adams",
            specialty: "Rheumatologist",
            symptoms: ["joint pain", "stiffness", "swelling", "chronic fatigue"],
            address: "515 Joint Care Dr, Springfield",
            phone: "(123) 555-0912"
        },
        {
            name: "Dr. Caroline Wilson",
            specialty: "Hematologist",
            symptoms: ["easy bruising", "frequent nosebleeds", "anemia", "fatigue"],
            address: "625 Blood Health St, Springfield",
            phone: "(123) 555-0150"
        }
    ];
    
// Keywords that trigger the doctor recommendation
const triggerKeywords = ["cough", "fever", "chest pain", "shortness of breath"];

//Helper Function
function checkForKeywords(input) {
    return triggerKeywords.some(keyword => input.toLowerCase().includes(keyword));
}

//Helpter Function
function findRecommendedDoctor(input) {
    const inputSymptoms = input.toLowerCase();
    return doctorInfoList.find(doctor =>
        doctor.symptoms.some(symptom => inputSymptoms.includes(symptom))
    );
}


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
    const{ prompt } = req.body;
    
    if(!req.body.prompt){
        return res.send("The prompt must not be empty");
    }
        let fullPrompt = introPrompt + req.body.prompt
        // console.log(fullPrompt);
        let responseContent;
        let ret = {};

        try {
            const response = await test(fullPrompt);
            responseContent = response.content;
            // testvar = "I'm here to help! Please provide the list of symptoms you are experiencing, and I'll do my best to identify potential diseases or conditions along with remedies.";
            console.log(responseContent);
        } catch (error) {
            console.log("something went wrong");
            console.log(error);
        }

        // console.log(formatAI(testvar.content));
        ret.disease = formatAI(responseContent+"*");
        // ret.disease = formatAI(testvar+"*");
        console.log(ret.disease);

        const recommendedDoctor = findRecommendedDoctor(req.body.prompt)

        if(recommendedDoctor){
            console.log("Keyword found! Adding Doctor Information")
            ret.doctor = recommendedDoctor;
        } else {
            console.log("No trigger word found");
        }

        if (Object.keys(ret.disease).length === 0) {
            console.log("try again\n");
            const testvar = await test(fullPrompt);
            ret.disease = formatAI(testvar.content+"*");

            if (Object.keys(ret.disease).length === 0) {
                return res.send({"error":"Sorry but I don't understand your symptoms, can you re-write your prompt to be more clearer."});
            }
        }

        res.send(ret);
    }
)
app.get("/use/:index",(req,res)=>{
    res.send({"num":useless(req.params.index)});
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