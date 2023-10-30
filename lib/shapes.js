// Render Circle using svg literal template
class Circle extends Shape { 
    constructor(shapeColorChoice, text, textColorChoice) {
        super(shapeColorChoice, text, textColorChoice);
    };
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColorChoice}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColorChoice}">${this.text}</text>
        </svg>
        `
    };
};

// Render Square using svg literal template
class Square extends Shape {
    constructor(shapeColorChoice, text, textColorChoice) {
        super(shapeColorChoice, text, textColorChoice);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColorChoice}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

// Render Triangle using svg literal template
class Triangle extends Shape {
    constructor(shapeColorChoice, text, textColorChoice) {
        super(shapeColorChoice, text, textColorChoice);  
    };
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColorChoice}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColorChoice}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = { Triangle, Square, Circle };