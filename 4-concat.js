const argv = process.argv;

if (argv.length < 2) {
    console.log('undefined is undifined');
} else if (argv.length === 2) {
    console.log(argv[2] + ' is undefined');
} else {
    console.log(argv[2] + ' is ' + argv[3]);
}
