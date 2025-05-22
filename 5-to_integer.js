const argv = process.argv;
const originalNumber = (argv[2]);
const flooredNumber = Math.floor(originalNumber);

if (!Number.isNaN(Number(argv[2])))
console.log('My number:' ,flooredNumber);
else console.log('Not a number');