grammar MiniC;

program : (declaration | statement)* ;

declaration : tipo ID ';' ;

statement
    : ID '=' expr ';'
    | 'if' '(' expr ')' '{' statement* '}'
    | 'while' '(' expr ')' '{' statement* '}'
    | 'do' '{' statement* '}' 'while' '(' expr ')' ';'
    | 'switch' '(' expr ')' '{' caseBlock* '}'
    | 'break' ';'
    ;

caseBlock : 'case' NUM ':' statement* ;

expr
    : expr op=('*'|'/') expr        # MulDiv
    | expr op=('+'|'-') expr        # AddSub
    | ID                            # id
    | NUM                           # int
    | '(' expr ')'                  # parens
    ;

tipo : 'int' | 'float' | 'bool' ;

ID  : [a-zA-Z_][a-zA-Z0-9_]* ;
NUM : [0-9]+ ;

WS : [ \t\r\n]+ -> skip ;
