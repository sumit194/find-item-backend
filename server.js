const express = require('express');

const PORT = 4000;
const app = express();

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})