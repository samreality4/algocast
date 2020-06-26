// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
   
    const midpoint = Math.floor((2*n -1)/ 2);
for(let row = 0; row < n; row++){
    let level = '';

    for(let column = 0; column < 2 * n - 1; column ++){
        // 2 - 0 <= 0 && 2 +0 >= 0
        // 2 - 0 <= 1 && 2 + 0 >= 1 
        // 2 - 0 <=2 && 2 + 0 >= 2
        //2 - 0 <=3 && 2 + 0 >= 3 

        // 2 - 1 <= 0 && 2 +1 >= 0
        // 2 - 1 <= 1 && 2 + 1 >= 1 
        // 2 - 1 <=2 && 2 + 1 >= 2
        //2 - 1 <=3 && 2 + 1 >= 3 

        //the size of midpoint is expanded by the row number
       
        if(midpoint - row <= column && midpoint + row >= column){
            level += '#';
        }else{
            level += ' ';
            }
    }

    console.log(level);
}


}

module.exports = pyramid;
