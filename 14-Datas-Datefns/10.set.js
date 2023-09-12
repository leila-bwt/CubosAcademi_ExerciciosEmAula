const{set} = require('date-fns');

//tranforma 20/9/2014 em 20/10/2015
let result = set(new Date(2014,8,20), {
    year: 2015,
    month: 9,
});
console.log(result);
