/*Write a script that prints a message depending of the number of arguments passed:

If no arguments are passed to the script, print “No argument”
If only one argument is passed to the script, print “Argument found”
Otherwise, print “Arguments found”
You must use console.log(...) to print all output
You are not allowed to use var
Reference: process.argv */

const args = process.argv

if (args.length <= 2) {
  console.log("No argument");
} else if (args.length === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}