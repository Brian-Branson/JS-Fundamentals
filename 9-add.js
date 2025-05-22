const args = process.argv;
const first = Number(args[2]);
const second = Number(args[3]);

if (isNaN(first) || isNaN(second)) {
    console.log('Missing number');
} else {
    console.log(first + second);
}