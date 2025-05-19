import MiniCLexer from "./generated/MiniCLexer.js";
import MiniCParser from "./generated/MiniCParser.js";
import { CustomMiniCVisitor } from "./CustomMiniCVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Procesar la entrada con ANTLR
    const inputStream = CharStreams.fromString(input);
    const lexer = new MiniCLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MiniCParser(tokenStream);
    parser.buildParseTrees = true;

    const tree = parser.program();  // programa es el axioma de tu gramática

    // Verificar errores de sintaxis
    if (parser._syntaxErrors > 0) {
        console.error("\n❌ Se encontraron errores de sintaxis.");
    } else {
        console.log("\n✅ Entrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Visitor personalizado
        const visitor = new CustomMiniCVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
