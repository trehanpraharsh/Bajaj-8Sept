const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const Info = req.body.data;
    const charArr = [];
    const numArr = [];
    console.log(Info.length);
    for (let idx = 0; idx < Info.length; idx++) {
      var num = parseInt(Info[idx]);
      if (!num) {
        const alphabetPattern = /^[A-Za-z]+$/;
        const isValid = alphabetPattern.test(Info[idx]);
        if (isValid) {
          charArr.push(Info[idx]);
        }
      } else {
        numArr.push(Info[idx]);
      }
    }

    let largest = [];

    for (let i = 1; i < charArr.length; i++) {
      const char = charArr[i];
      if (/[a-zA-Z]/.test(char) && char > largest) {
        largest.push(char);
      }
    }
    res.status(200).json({
      is_success: true,
      user_id: "Praharsh_Trehan_05102002",
      email: "pt9023@srmist.edu.in",
      roll_number: "RA2011003010652",
      num: numArr,
      alphabets: charArr,
      highest_alphabet: largest,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

const port = process.env.PORT;
app.listen({ port }, () => {
  console.log(`Server is running at port ${port}`);
});
