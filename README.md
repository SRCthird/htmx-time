# HTMX Time Checker

A simple web application built with Node.js and Express. This application is basically just me testing the use of HTMX for partially updating the page to display the current time in two formats: 12-hour and 24-hour.

## Table of Contents

- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/) installed.

### Steps
1. **Clone the Repository**
    ```bash
    git clone https://github.com/SRCthird/htmx-time.git
    cd htmx-time
    ```
2. **Install Dependencies**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```
3. **Start the Application**
    Using npm:
    ```bash
    npm start
    ```
    Or using Yarn:
    ```bash
    yarn start
    ```
    Navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

Once the application is running, you will see a button on the page that allows you to "Check the Time." When clicked, this will display the current time and allow you to switch between 12-hour and 24-hour formats by clicking another button. The time will update every second without the need to reload the page thanks to HTMX.

## Contributing

As this is a basic project to test HTMX functionality, contributions aren't necessary. However, if you'd like to extend the functionality or fix any issues, feel free to make a pull request.

## License

This project is open source and available under the [ISC License](LICENSE).
