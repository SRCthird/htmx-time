import { html, TemplateResult } from 'lit-html';

/**
 * This is the root HTML of the HTMX application.
 * 
 * @param {string | TemplateResult<1>} head - The HTML code for the head of the root page.
 * @param {string | TemplateResult<1>} body - The HTML code for the body of the root page.
 * @returns {TemplateResult<1>} - Returns the HTML code for the root of .
 */
export const root = (head: TemplateResult<1>, body: TemplateResult<1>): TemplateResult<1> => {
  if (!head) {
    head = html`<title>HTMX with Node.js</title>`;
  };
  if (!body) {
    body = html``;
  };
  return html`
    <!DOCTYPE html>
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
    </html>
  `;
};

