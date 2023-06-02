const express = require('express');
const { get_artist, search } = require("libmuse");
const app = express();
const port = 3000;

app.get('/search/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const data = await search(query);
        res.json({ results: data });
    } catch (error) {
        res.status(500).send('An error occurred while processing your request');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
