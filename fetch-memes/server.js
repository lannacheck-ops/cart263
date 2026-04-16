const express = require('express');

const app = express();
const PORT = 3000;

const API_KEY = process.env.API_KEY;

// allow frontend access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/meme', async (req, res) => {
    try {
        const keyword = req.query.keyword || 'funny';

        const response = await fetch(`https://api.apileague.com/retrieve-random-meme?keywords=${keyword}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) {
            const text = await response.text();
            console.log('API ERROR:', text);
            throw new Error('API request failed');
        }

        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.error('SERVER ERROR:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
