var Mathmatics = 75.25 ;
var Biology = 65 ;
var Chemistry = 80 ;
var Physics = 35.45 ;
var Bangla = 99.50 ;

var totalMarks = (Mathmatics + Biology + Chemistry + Physics + Bangla);
// console.log(totalMarks);

var averageMarks = (totalMarks / 5);
averageMarks = averageMarks.toFixed(2);
averageMarks = parseFloat(averageMarks);
console.log(averageMarks);