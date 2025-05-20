import MiniCVisitor from './generated/MiniCVisitor.js';

export class CustomMiniCVisitor extends MiniCVisitor {
  constructor() {
    super();
  }

  visitProgram(ctx) {
    console.log("Visitando programa...");
    return this.visitChildren(ctx);
  }

  visitDeclaration(ctx) {
    const tipo = ctx.tipo().getText();
    const id = ctx.ID().getText();
    console.log(`Declaración de variable: tipo=${tipo}, id=${id}`);
    return null;
  }

  visitStatement(ctx) {
    const text = ctx.getText();

    if (ctx.ID() && ctx.getChildCount() === 4) {
      console.log(`Asignación: ${ctx.ID().getText()} = ...`);
    } else if (ctx.getChild(0).getText() === 'if') {
      console.log(`Sentencia if detectada`);
    } else if (ctx.getChild(0).getText() === 'while') {
      console.log(`Bucle while detectado`);
    } else if (ctx.getChild(0).getText() === 'do') {
      console.log(`Bucle do-while detectado`);
    } else if (ctx.getChild(0).getText() === 'switch') {
      console.log(`Sentencia switch detectada`);
    } else if (ctx.getChild(0).getText() === 'break') {
      console.log(`Sentencia break detectada`);
    } else {
      console.log(`Sentencia desconocida: ${text}`);
    }

    return this.visitChildren(ctx);
  }

  visitCaseBlock(ctx) {
    const numero = ctx.NUM().getText();
    console.log(`Bloque case detectado con número: ${numero}`);
    return this.visitChildren(ctx);
  }

  visitExpr(ctx) {
    if (ctx.op) {
      const op = ctx.op.text;
      const left = this.visit(ctx.getChild(0));
      const right = this.visit(ctx.getChild(2));
      console.log(`Operación: ${left} ${op} ${right}`);
      return null;
    } else if (ctx.NUM()) {
      return ctx.NUM().getText();
    } else if (ctx.ID()) {
      return ctx.ID().getText();
    } else {
      return this.visitChildren(ctx);
    }
  }
}
