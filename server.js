const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

const app = express();

// Load environment variables from .env file
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const config = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(config);

app.use(bodyParser.json());

// Set up CORS to allow requests from your React application's domain
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      max_tokens: 512,
      temperature: 0,
      prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).send('Error generating text');
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
