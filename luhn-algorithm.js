// ================ LUHN ALGORITHM ================ //

/**
 * Luhn Algorithm
 
    Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

    1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
    2. Sum all digits in the altered number.
    3. If that total is a multiple of 10, the number is valid.

    For example, given the card number 4408 0412 3456 7893:
    Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
    Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
    Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
    Step 3:  70 % 10 == 0
  
 
 * Write a function validCard that takes a number as an argument and returns true for a valid number and false for an invalid number.
 * Solutions:
    validCard(1234567890123456); //should be false
    validCard(4408041234567893); //should be true
    validCard(38520000023237); //should be true
    validCard(4222222222222); //should be true
 */






// ==================== PSUEDOCODE ==================== //

/**
 * Psuedocode and plan:
    * turn number into string
    * turn string to an array, and separate numbers by commas
    * reverse the array
    * 
    * Conditions:
    * if index# is even or 0, push it to new array
    * if index# is odd, multiple by 2, then push to new array
        * But if number is >=10, do (number-10) + 1, then push to new array
    * get total sum of new array
    * if total sum % 10 === 0, then return true : if not, return false
    * Notes: use if/else statement to add the numbers odd and even index# (remember index 0)
 */






// =========== SOLUTION WITH CONSOLE.LOG TESTS =========== //

// function validCard(number) {
//     let newArray = []

//     console.log(number)
//     console.log("above is a: " + typeof (number))

//     let numberStr = number.toString()
//     console.log(numberStr)
//     console.log("above is a: " + typeof (numberStr))

//     let numberArr = numberStr.split('').reverse()
//     console.log("This is the array of number reversed:")
//     console.log(numberArr)

//     for (let i = 0; i < numberArr.length; i++) {
//         if (i % 2 === 0 || i === 0) {
//             console.log("index: " + i + " = " + numberArr[i])
//             console.log("pushing " + numberArr[i] + " to newArray")
//             newArray.push(parseInt(numberArr[i]))
//         } else if (i % 2 != 0 && i != 0) {
//             console.log("index number: " + i + " = " + numberArr[i])

//             if ((numberArr[i] * 2) >= 10) {
//                 doubleNum = ((numberArr[i] * 2) - 10) + 1
//                 console.log(numberArr[i] + " doubled is greater than 10, so adding both digits = " + doubleNum)
//                 console.log("pushing " + doubleNum + " to newArray")
//                 newArray.push(parseInt(doubleNum))
//             } else {
//                 doubleNum = numberArr[i] * 2
//                 console.log(numberArr[i] + " doubled = " + doubleNum)
//                 newArray.push(parseInt(doubleNum))
//             }
//         }
//     }

//     console.log("The new array:")
//     console.log(newArray)

//     let sum = 0
//     sum = newArray.reduce((a, b) => a + b, 0)
//     console.log("total sum = " + sum)

//     // for loop method to get total sum:
//     // for (let i = 0; i < newArray.length; i++) {
//     //     sum = sum + newArray[i]
//     //     console.log("total sum update:")
//     //     console.log(sum)
//     // }

//     if (sum % 10 === 0) {
//         console.log(true)
//         console.log("The card information is valid")
//     } else {
//         console.log(false)
//         console.log("ERROR: this card information is not valid")
//     }
// }

// Test Cases:
// validCard(1234567890123456); //should be false
// validCard(4408041234567893); //should be true
// validCard(38520000023237); //should be true
// validCard(4222222222222); //should be true




// ===================== FINAL SOLUTION  ===================== //

function validCard(number) {
    
    let numberStr = number.toString()
    let numberArr = numberStr.split('').reverse()
    let newArray = []

    for (let i = 0; i < numberArr.length; i++) {
        if (i % 2 === 0 || i === 0) {
            newArray.push(parseInt(numberArr[i]))
        } else if (i % 2 != 0 && i != 0) {
            if ((numberArr[i] * 2) >= 10) {
                doubleNum = ((numberArr[i] * 2) - 10) + 1
                newArray.push(parseInt(doubleNum))
            } else {
                doubleNum = numberArr[i] * 2
                newArray.push(parseInt(doubleNum))
            }
        }
    }

    let sum = 0
    sum = newArray.reduce((a, b) => a + b, 0)

    if (sum % 10 === 0) {
        console.log("The card number is valid")
        return true
    } else {
        console.log("ERROR: this card number is not valid")
        return false
    }
}

// Test Cases:
validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true
