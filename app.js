const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/api/questions', (req, res) => {
  
  const questions = [
    { question: 'What is 2+2?', answer: '4' },
    { question: 'Who is the president of the USA?', answer: 'Varies' },
  
  ];
  res.json(questions);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
