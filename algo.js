var string1 = 'banana';
var string2 = 'hammock';
var comparsions = [];

for (var i = 0; i <= string1.length; i++) {
    comparsions[i] = new Array();
    for (j = 0; j < string2.length; ++j) {
       if (i > 0 && j > 0) {
		//  comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
        //  console.log('comparsions[i]', comparsions[i - 1] + 1)
        //  console.log('comparsions[j]', comparsions[j - 1] + 1)
        comparsions[i][j] = comparsions[i - 1][j - 1] + 1
        
        console.log('comparsions[j]', comparsions[j])
        console.log('comparsions[i]', comparsions[i])

        } 
        // else {
		//  comparsions[i][j] = 1;
		// }
    }

}