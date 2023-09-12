//const date = new Date(2021, 0, 1, 13);
//console.log(date);
//console.log(+date);
// oq é salvo é o timestamp

const {zonedTimeToUtc, utcToZonedTime, format } = require('date-fns/tz')
// pegar data que esta em UTC e tranformar em time zone

const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin');
// quer converter a data para fuso Europe/Berlin

console.log(utcDate);