import express from 'express';
import { format } from 'date-fns';
import { root } from './elements.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.query);
    res.send(
        root(
            `<title>HTMX with Node.js</title>`,
            `<button hx-get="/checkTime12hr" hx-swap="outerHTML">
                Click to check time
            </button>`
        )
    );
});

app.get('/checkTime12hr', (req, res) => {
    res.send(
        root(
            `<title>12 Hour Clock with HTMX</title>`,
            `<div id=clockContainer>
                <button hx-get="/checkTime24hr" hx-target="#clockContainer" hx-swap="outerHTML" id="clock">
                    Click again for 24 hour format
                </button>
                <div hx-get="/clock/?time=12" hx-trigger="every 1s" id="clock">
                    Waiting for update...
                </div>
            </div>`
        )
    );
});

app.get('/checkTime24hr', (req, res) => {
    res.send(
        root(
            `<title>24 Hour Clock with HTMX</title>`,
            `<div id=clockContainer>
                <button hx-get="/checkTime12hr" hx-target="#clockContainer" hx-swap="outerHTML">
                    Click again for 12 hour format
                </button>
                <div hx-get="/clock/?time=24" hx-trigger="every 1s" id="clock">
                    Waiting for update...
                </div>
            </div>`
        )
    );
});

app.get('/clock', (req, res) => {
    const time = new Date()
    if (req.query.time == '24') {
        res.send(
            format(time, 'HH:mm:ss')
        );
    } else{
        res.send(
            time.toLocaleTimeString()
        );
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
