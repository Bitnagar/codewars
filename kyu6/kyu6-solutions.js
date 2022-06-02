"use strict"

// Task: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Solution:
function pigIt(str) {
    return str.split(" ").map(str => {
        return str.match(/[^\w\s]/gi) ? str : str.slice(1).padEnd(str.length + 2, str.charAt(0) + "ay");
    }).join(" ");

    // One liner: (copied)
    // return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}


