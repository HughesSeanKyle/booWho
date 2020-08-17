/*
Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

//Solution one

function booWho(bool) {                 //1
  return typeof bool === "boolean";     //2
}

console.log(booWho(false));

//Notes
/*
//1     This function takes in an argument to be evaluated as a boolean or not.

//2     The typeof operator returns a string indicating the type of the unevaluated operand.
        Source - [https://devdocs.io/javascript/operators/typeof]

        The above operator will evaluate the argument and check if it is STRICTLY equal to a boolean.

        If the argument provided is anything other than a boolean primitive it will return false. 
            
            
*/

