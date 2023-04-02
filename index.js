const express = require("express");

// using tesseract library for conversions
const Tesseract = require("tesseract.js");

const app = express();

app.use(express.json());

// Home Route "/"

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// Captcha to text route "/captchatotext"

app.get("/captchatotext", (req, res) => {
  Tesseract.recognize(
    "https://i.ibb.co/jTKYQqP/Captcha-United.png", //  <= put your captcha image here
    "eng", // <= Language
    {
      logger: (m) => console.log(m),
    }
  ).then(({ data: { text } }) => {
    console.log(text); // <== Output text
    res.status(200).json(text);
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
