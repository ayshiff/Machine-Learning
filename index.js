// Initialize the libraries
const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // Linear Regression

const csvFilePath = 'Advertising.csv'; // Data
let csvData = [], // parsed Data
    X = [], // Input
    y = []; // Output

let regressionModel;

const readline = require('readline'); // For user prompt to allow predictions

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

// Load the data
csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData(); // To get data points from JSON Objects
        performRegression(); 
    });

    function performRegression() {
        regressionModel = new SLR(X, y); // Train the model on training data
        console.log(regressionModel.toString(3));
        predictOutput();
    }

function dressData(){

    csvData.forEach((row) => {
        // Bug fixed => Radio replaced by radio
        X.push(f(row.radio));
        y.push(f(row.sales));
    })
}    

function f(s) {
    return parseFloat(s);
}


function predictOutput() {
    rl.question('Enter input X for prediction (Press CTRL+C to exit) : ', (answer) => {
        console.log(`At X = ${answer}, y =  ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}

