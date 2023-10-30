// require colorKeywords array to check if input matches one of the accepted colors
const colourKeywords = require('./colourKeywords.js');

const questions = [
    // ***SHAPE***
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // ****SHAPE COLOUR***
    // user choose colour keyword or hexadecimal for shapeColour
    {
        name: 'shapeColourChoice',
        message: 'Choose a colour format: ',
        type: 'list',
        choices: ['colour keyword', 'hexadecimal']
    },
    // colour keyword (validate with colourKeywords array)
    {
        type: "input",
        name: "shapeColour",
        message: "Enter the shape colour keyword",
        when: (answers) => {
            if(answers.shapeColourChoice === 'colour keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colourKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colourKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid colour keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "shapeColour",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColourChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    // ***TEXT***
    // validate user can only submit 3 characters
    {
        name: 'text',
        message: 'What is the text? (max 3 characters)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    // ***TEXT COLOUR***
    // user choose colour keyword or hexadecimal for textColour
    {
        name: 'textColourChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['colour keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "textColour",
        message: "Enter the text colour keyword",
        when: (answers) => {
            if(answers.textColourChoice === 'colour keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colourKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colourKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid colour keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "textColour",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColourChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;