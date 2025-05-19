# Analizador Sintactico MiniC - ANTLR4 + JavaScript

Este proyecto implementa un analizador para una gramatica reducida del lenguaje C, utilizando ANTLR4 y JavaScript.

## Instalacion

Clona este repositorio: git clone git clone https://github.com/MartinHuallpa/50956.git
cd 50956


##  Archivos de prueba incluidos

- `input-ok1.txt`: declaracion y asignacion valida.
- `input-ok2.txt`: multiples declaraciones y expresiones validas.
- `input-err1.txt`: error por falta de punto y coma y expresion incompleta.
- `input-err2.txt`: error por falta de numero en una sentencia `case`.

## Como usar

1. Copiar cualquiera de estos archivos como `input.txt`.
2. Ejecutar con:

```bash
npm start
```

El programa leera `input.txt`, mostrara si es valida o no, e imprimira informacion del analisis.

