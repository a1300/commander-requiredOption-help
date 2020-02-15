

import * as program from 'commander';


function login() {
    console.log('login')
}

function main() {

    program
        .version('1.0.0')
        .command('login')
        .requiredOption('--firstPassword <secret>')
        .option('--secondPassword <secret>')
        .action(login);

    if (!process.argv.slice(2).length) {
        program.outputHelp();
      }
    program.parse(process.argv);
}


main();
