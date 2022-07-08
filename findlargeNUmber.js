const findLargeInThree = function (n1, n2, n3) { //1

    let large_val = 0
    if (n1 > n2) {//2
        large_val = n1

    } else { //2 //3
        large_val = n2

    }//3
    if (n3 > large_val) { //4
        large_val = n3
    }//4
    return large_val

}   //1
console.log(findLargeInThree(100, 500, 70));
// from sachin abs
// scope  ==> block

//  1. correct function to calll
//  2. variable naming
//  3. correct file


