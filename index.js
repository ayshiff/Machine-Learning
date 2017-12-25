const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // Simple Linear Regression

const csvFilePath = 'advertising.csv'; // Data
let csvData = [], // parsed Data
    X = [], // Input
    y = []; // Output

let regressionModel;