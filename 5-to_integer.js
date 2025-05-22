const argv = process.argv;
const flooredNumber = Math.floor(originalNumber);

if (!Number.isNaN(Number(argv[2])))
console.log(' My number is : ' ,flooredNumber);
else console.log('Not a number');