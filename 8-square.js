const argv = process.argv;

const size = Number(argv[2]);

function printSquare(s, char = 'X') {
    for (let i = 0; i < s; i++) {
        let row = '';
        for (let j = 0; j < s; j++) {
            row += char;
        }
        console.log(row);
    }
}

if (!isNaN(size) && size > 0) {
    printSquare(size);
} else {
    console.log('Missing size');
}
