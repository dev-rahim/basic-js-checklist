// 1. write 3 variables (number, string, boolean)
let = 12;
let name = 'Rahim';
let isRahim = true;
// 2. 2 variables using (let, const)
let customerName = 'Rahim Uddin';
const age = 19;
customerName = 'Bulbul';

// 3. Simple Math Operations() +, -, *, /, %)
/* let number1 = 5;
let number2 = 50
let number3=45;
const sum = number1 + number2;
console.log( 'Summetion =', sum );
const sub = number2 - number1;
console.log( 'Submission =', sub );
const multiplication=number1*number2;
console.log('Multiplication is=',multiplication);
const divition=number2/number1;
console.log('Diviton is =',divition);
const remainNumber=number2%number3;
console.log('Remain Number= ',remainNumber); */

// 4. comparison ()
/* const rakibAge = 20;
const ramesAge = 26;
const anisAge = 15;
if ( rakibAge > ramesAge ) {
    console.log( 'Rakib is older then Ramesh' );
}
if ( rakibAge >= ramesAge ) {
    console.log( 'Rakib is older then Ramesh' );
}
if ( rakibAge < ramesAge ) {
    console.log( 'Ramesh is older then Rakib' );
}
if ( rakibAge <= ramesAge ) {
    console.log( 'Ramesh is older then Rakib' );
}
if ( rakibAge == ramesAge ) {
    console.log( 'Ramesh and Rakib is same aged' );
}
if ( rakibAge != ramesAge ) {
    console.log( 'Ramesh and Rakib is not  same aged' );
} */
// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition

// 6. if-else
/* if ( a > b ) {
    console.log( a, 'is big' );
} else {
    console.log( b, 'is big' );
} */

//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19
/* let i = 7;
while ( i < 19 ) {
    console.log( i );
    i += 2;

} */
// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array
let numbers = [ 12, 52, 25, 63, 14, 36, 14, 85, 69, 74, 65, 89, 74, 12, 32, 58, 65, 94 ];
/* // length of an array 
let numberOfElement = numbers.length;
console.log( 'aray lemgth', numberOfElement );
// update or change 4th position element
console.log( numbers[ 3 ] );
numbers[ 3 ] = 60;
console.log( numbers[ 3 ] );
 */
// add element 
/* console.log( numbers );
numbers.push( 99 );
console.log( numbers );
// remove element 
numbers.pop();
console.log( numbers ); */

// check is element is in array ?
/* let checkThisNumber = 30;
if ( numbers.indexOf( checkThisNumber ) != -1 ) {
    console.log( checkThisNumber, 'is in array' );
} else {
    console.log( checkThisNumber, 'is not in array' );
} */

// 9. use any for loop to display every elements of an array 
/* console.log( 'Array all elements ' );
for ( const element of numbers ) {
    console.log( element );
} */
// 10. you have an array of numbers. display only the numbers bigger than 80
let elementsBiggerThen80 = [];
for ( const element of numbers ) {
    if ( element > 80 ) {
        elementsBiggerThen80.push( element );
    }
}
// console.log( elementsBiggerThen80 );

// 11. write a function that takes three numbers and returns the multiplication of the three numbers
function getMultiplicationOf3Numbers( n1, n2, n3 ) {
    let multiplication = n1 * n2 * n3;
    return multiplication
}
let multiplicationOf3Numbers = getMultiplicationOf3Numbers( 5, 7, 2 );
// console.log( 'Multiplication Of 3 Numbers is= ', multiplicationOf3Numbers );

// 12. declare an object and change any property of that object.
let book = {
    name: 'Microprocessor and Interfacing',
    pageNo: 250,
    color: 'Black',
}
console.log( book.pageNo );
book.pageNo = 300;
console.log( book.pageNo );
book[ 'pageNo' ] = 400;
console.log( book.pageNo );