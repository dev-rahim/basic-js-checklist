// 1. conversation
/* function feetToInch( feet ) {
    const inch = feet * 12;
    return inch;
}
let givenFeet = 10;
const convertedToInch = feetToInch( givenFeet );
console.log( convertedToInch );
 */
// 2. conversion
/* function centimeterToMeter( centimeter ) {
    const meter = centimeter / 100;
    return meter;
}
let givenCentimeter = 1560;
const convertdToMeter = centimeterToMeter( givenCentimeter );
console.log( convertdToMeter ); */

// 3. calculation
/* function pageRequirements( quentetyOfBook1, quentetyOfBook2, quentetyOfBook3 ) {
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const totalPagesPrintedBook1 = book1Pages * quentetyOfBook1;
    const totalPagesPrintedBook2 = book2Pages * quentetyOfBook2;
    const totalPagesPrintedBook3 = book3Pages * quentetyOfBook3;
    const totalPages = totalPagesPrintedBook1 + totalPagesPrintedBook2 + totalPagesPrintedBook3;
    return totalPages;
}

const totalPagesPrinted = pageRequirements( 2, 3, 5 );
console.log( totalPagesPrinted ); */
// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

//4. friends
function bestFriend( friends ) {
    let biggestName = '';
    for ( const name of friends ) {
        let lanth = name.length
        // console.log(lanth);
        if ( lanth > biggestName.length ) {
            biggestName = name;
        }
    }
    console.log( biggestName );
}
let friends = [ 'Rahi', "Rahim", 'Atik', 'Nasir Uddin', "onlik", 'Rakesh', "raisul" ];
let biggestIs = bestFriend( friends );

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
/* function onlyPositive( prices ) {
    for ( const elements of prices ) {
        if ( elements < 0 ) {
            break;
        }
        else {
            console.log( elements );
        }
    }
}
let prices = [ 1220, 25, 32, 20, 25, 20, 52, 25, 25, 25, 36, -31, 41, 85, 853, 65 ];
onlyPositive( prices );
 */