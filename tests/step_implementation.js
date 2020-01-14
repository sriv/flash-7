/* globals gauge*/

"use strict";

var assert = require("assert");

var vowels = ["a", "e", "i", "o", "u"];

var numberOfVowels = function (word) {
  var vowelArr = word.split("").filter(function (elem) { return vowels.indexOf(elem) > -1; });
  return vowelArr.length;
};

// --------------------------
// Gauge step implementations
// --------------------------

step("Vowels in English language are <vowels>.", function(vowelsGiven) {
    return new Promise((resolve) => {
        setTimeout(() => {
            assert.equal(vowelsGiven, vowels.join(""));
            resolve()
        }, 1000);
    });
});

step("The word <word> has <number> vowels.", function(word, number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            assert.equal(number, numberOfVowels(word))
            resolve()
        }, 1000);
    });
});

step("Almost all words have vowels <table>", function(table) {
    return new Promise((resolve) => {
        table.rows.forEach(function (row, i) {
            setTimeout(() => {
                assert.equal(numberOfVowels(row.cells[0]), parseInt(row.cells[1]));
                if (i=== table.rows.length -1) resolve();
            }, 1000);
        });
  });
});

// ---------------
// Execution Hooks
// ---------------

beforeScenario(function () {
  assert.equal(vowels.join(""), "aeiou");
});

beforeScenario(function () {
  assert.equal(vowels[0], "a");
}, { tags: [ "single word" ]});
