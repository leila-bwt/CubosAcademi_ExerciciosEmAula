const express = require('express');

const app = express();

app.use(express.json());

app.get('/carros', async (req, res) => {
    res.json([
        {
            modelo: 'S10',
            marca: 'Chevrolet',
        },
        {
            modelo: 'Fusion',
            marca: 'Ford',
        },
    ]);

});


app.listen(3001)