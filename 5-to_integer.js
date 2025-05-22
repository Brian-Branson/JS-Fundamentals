const argv = process.argv;

if (!isNaN(Number(argv[2])))
console.log(Number(argv[2]));
else console.log('Not a number');