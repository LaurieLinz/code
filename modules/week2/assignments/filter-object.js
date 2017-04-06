/**
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Filter the inputted books bounded by input year.
 */
function filterByDate(books, yearMin, yearMax) {
    
}