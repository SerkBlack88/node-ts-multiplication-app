import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv) )
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base must be a number';
        }
        if (argv.b < 1) {
            throw 'The base must be greater than 0';
        }
        if (isNaN(argv.l)) {
            throw 'The limit must be a number';
        }
        if (argv.l < 1) {
            throw 'The limit must be greater than 0';
        }
        return true;
    })
    .parseSync();
