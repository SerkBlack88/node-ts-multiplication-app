import fs from 'fs';
import { yarg } from "./config/plugins/args.plugin";

console.log(yarg);

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage = '';
// const baseNumber = yarg.b;
const headerMessage = `
===================================
Tabla de multiplicar del ${base}
===================================\n
`;

for (let index = 1; index <= limit; index++) {
    outputMessage += `${base} x ${index} = ${base * index}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) console.log(outputMessage);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');
