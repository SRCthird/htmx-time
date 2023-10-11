import express from 'express';
import { root } from './elements.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(
        root(
            `<div hx-get="/clock" hx-trigger="every 1s" id="mydiv">
                Waiting for update...
            </div>`
        )
    );
});

app.get('/clock', (req, res) => {
    res.send(new Date().toLocaleTimeString());
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
