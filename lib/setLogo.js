// const { Triangle, Square, Circle } = require("./lib/shapes.js");

function setLogo(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColour, response.text, response.textColour)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColour, response.text, response.textColour)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColour, response.text, response.textColour)
        return userShape.render()
    }
};

module.exports = setLogo;