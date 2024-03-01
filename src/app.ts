import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// Funcion anónima autoinvocada
// (() => {
//     console.log('object');
// })();

(async() => {
    await main();
})();

async function main() {

    const { b:base, l:limit, s:showTable, n:name, d:destination } = yarg;

    ServerApp.run({ base, limit, showTable,  destination, name});
}

