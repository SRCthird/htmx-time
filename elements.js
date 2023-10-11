/**
 * This is the root HTML of the HTMX application.
 * 
 * @param {JSX} head - The HTML code for the head of the root page.
 * @param {JSX} body - The HTML code for the body of the root page.
 * @returns {string} - Returns the HTML code for the root of .
 */
export const root = (head, body) => {
    if (!head) head = '<title>HTMX with Node.js</title>';
    if (!body) body = '';
    return(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://unpkg.com/htmx.org@1.6.1"></script>
            ${head}
        </head>
        <body>
            ${body}
        </body>
        </html>`
    );
};