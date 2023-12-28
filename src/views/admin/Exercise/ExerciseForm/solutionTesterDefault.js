const outputMessage = "`[Fail]${testcase.s};${result};${testcase.expected}`"

const splitRegrex = "/\s+/g";

const regexValue = /\r?\n|\r|\n/g;


export const value = `
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { resolve } = require('path');
    const { readFileSync } = require('fs');
    const mainFunction = require('./Solution.js');

    // read test case from file
    const file = resolve(__dirname, 'testcase.txt');
    const data = readFileSync(file);
    // console.log('data', data.toString());
    let lines = data.toString().split(${regexValue});
    // console.log(lines);
    var testcases = [];
    for (let i = 0; i < lines.length; i = i + 2) {
    let s = '""';
    if (lines[i] != 'null') {
        s = lines[i];
    }

    let expected = lines[i + 1];
    console.log('expected + ', expected);

    testcases.push({ s, expected });
    }

    let testresult = true;

    for (let i = 0; i < testcases.length; i++) {
    const testcase = testcases[i];
    //console.log(testcase);
    let result = mainFunction(testcase.s);
    //console.log("testcase.expected:", testcase.expected);
    if (!isEqual(testcase.expected, result)) {
        const message = ${outputMessage};
        testresult = false;
        console.log(message);
        break;
    }
    }

    if (testresult) {
        const message =
            '[Success]Your solution passed all ' + testcases.length + ' test cases!';
        console.log(message);
    }

    function isEqual(expected, actualResult) {
        
    }
`