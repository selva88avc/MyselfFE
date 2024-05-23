/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(rows) {
    if(typeof rows == "number"){
        let n = rows;
    let output="";
    for (let i = 0; i < n; i++) { 
        let str = "* "; 
        let space = ' '; 
        output +=(space.repeat((n - i-1)) + str.repeat(i+1))+"\n"; 
    }
    return output;
}else{
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
}
}
