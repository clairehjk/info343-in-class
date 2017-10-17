//Strings
var x ='I like JavaScript more than I like to party.';
console.log(x.slice(27,x.length));

var wsu='I love Washington State University';
var rep=wsu.replace("Washington State University","University of Washington");
console.log(rep);

rep = x.concat(rep);
console.log(rep);

//functions
function sumUpTo(n) {
    var x = 0;
    for(let i=1; i <=n;i++) {
        x += i;
    }
    return x;
}    
console.log(sumUpTo(5));

function vowelCount(s) {
    var arr = s.match(/[aeiou]/gi);
    if(arr === null) {
        return 0;
    } else {
        return arr.length;
    }
    // var vCount = 0;
    // var vowels = ['a','e','i','o','u'];
    // for(let i = 0;i<s.length;i++) {
    //     for(let j=0;j<vowels.length;j++){
    //         if(s.charAt(i)===vowels[j])
    //             vCount++;
    //     }
    // }
    // return vCount;
}
console.log(vowelCount('kookaburra'));

//arrays

function findMin(arr) {

}
var nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
console.log(findMin(nums));