// Generated from d:/aa/50268-main/antlr-calculator-project/MiniC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCListener from './MiniCListener.js';
import MiniCVisitor from './MiniCVisitor.js';

const serializedATN = [4,1,23,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,1,1,1,1,1,1,1,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,5,2,48,8,2,10,2,12,2,51,9,2,1,2,1,2,1,2,1,2,1,2,5,
2,58,8,2,10,2,12,2,61,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,5,2,76,8,2,10,2,12,2,79,9,2,1,2,1,2,1,2,1,2,3,2,85,8,2,1,3,1,3,1,3,
1,3,5,3,91,8,3,10,3,12,3,94,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,103,8,4,
1,4,1,4,1,4,1,4,1,4,1,4,5,4,111,8,4,10,4,12,4,114,9,4,1,5,1,5,1,5,0,1,8,
6,0,2,4,6,8,10,0,3,1,0,14,15,1,0,16,17,1,0,18,20,127,0,16,1,0,0,0,2,19,1,
0,0,0,4,84,1,0,0,0,6,86,1,0,0,0,8,102,1,0,0,0,10,115,1,0,0,0,12,15,3,2,1,
0,13,15,3,4,2,0,14,12,1,0,0,0,14,13,1,0,0,0,15,18,1,0,0,0,16,14,1,0,0,0,
16,17,1,0,0,0,17,1,1,0,0,0,18,16,1,0,0,0,19,20,3,10,5,0,20,21,5,21,0,0,21,
22,5,1,0,0,22,3,1,0,0,0,23,24,5,21,0,0,24,25,5,2,0,0,25,26,3,8,4,0,26,27,
5,1,0,0,27,85,1,0,0,0,28,29,5,3,0,0,29,30,5,4,0,0,30,31,3,8,4,0,31,32,5,
5,0,0,32,36,5,6,0,0,33,35,3,4,2,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,
0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,7,0,0,40,85,1,0,0,
0,41,42,5,8,0,0,42,43,5,4,0,0,43,44,3,8,4,0,44,45,5,5,0,0,45,49,5,6,0,0,
46,48,3,4,2,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
52,1,0,0,0,51,49,1,0,0,0,52,53,5,7,0,0,53,85,1,0,0,0,54,55,5,9,0,0,55,59,
5,6,0,0,56,58,3,4,2,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,
0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,7,0,0,63,64,5,8,0,0,64,65,5,4,
0,0,65,66,3,8,4,0,66,67,5,5,0,0,67,68,5,1,0,0,68,85,1,0,0,0,69,70,5,10,0,
0,70,71,5,4,0,0,71,72,3,8,4,0,72,73,5,5,0,0,73,77,5,6,0,0,74,76,3,6,3,0,
75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,
77,1,0,0,0,80,81,5,7,0,0,81,85,1,0,0,0,82,83,5,11,0,0,83,85,5,1,0,0,84,23,
1,0,0,0,84,28,1,0,0,0,84,41,1,0,0,0,84,54,1,0,0,0,84,69,1,0,0,0,84,82,1,
0,0,0,85,5,1,0,0,0,86,87,5,12,0,0,87,88,5,22,0,0,88,92,5,13,0,0,89,91,3,
4,2,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,7,1,0,0,
0,94,92,1,0,0,0,95,96,6,4,-1,0,96,103,5,21,0,0,97,103,5,22,0,0,98,99,5,4,
0,0,99,100,3,8,4,0,100,101,5,5,0,0,101,103,1,0,0,0,102,95,1,0,0,0,102,97,
1,0,0,0,102,98,1,0,0,0,103,112,1,0,0,0,104,105,10,5,0,0,105,106,7,0,0,0,
106,111,3,8,4,6,107,108,10,4,0,0,108,109,7,1,0,0,109,111,3,8,4,5,110,104,
1,0,0,0,110,107,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,
113,9,1,0,0,0,114,112,1,0,0,0,115,116,7,2,0,0,116,11,1,0,0,0,11,14,16,36,
49,59,77,84,92,102,110,112];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCParser extends antlr4.Parser {

    static grammarFileName = "MiniC.g4";
    static literalNames = [ null, "';'", "'='", "'if'", "'('", "')'", "'{'", 
                            "'}'", "'while'", "'do'", "'switch'", "'break'", 
                            "'case'", "':'", "'*'", "'/'", "'+'", "'-'", 
                            "'int'", "'float'", "'bool'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ID", "NUM", 
                             "WS" ];
    static ruleNames = [ "program", "declaration", "statement", "caseBlock", 
                         "expr", "tipo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCParser.ruleNames;
        this.literalNames = MiniCParser.literalNames;
        this.symbolicNames = MiniCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3936008) !== 0)) {
	            this.state = 14;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 18:
	            case 19:
	            case 20:
	                this.state = 12;
	                this.declaration();
	                break;
	            case 3:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 21:
	                this.state = 13;
	                this.statement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniCParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.tipo();
	        this.state = 20;
	        this.match(MiniCParser.ID);
	        this.state = 21;
	        this.match(MiniCParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.match(MiniCParser.ID);
	            this.state = 24;
	            this.match(MiniCParser.T__1);
	            this.state = 25;
	            this.expr(0);
	            this.state = 26;
	            this.match(MiniCParser.T__0);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(MiniCParser.T__2);
	            this.state = 29;
	            this.match(MiniCParser.T__3);
	            this.state = 30;
	            this.expr(0);
	            this.state = 31;
	            this.match(MiniCParser.T__4);
	            this.state = 32;
	            this.match(MiniCParser.T__5);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2101000) !== 0)) {
	                this.state = 33;
	                this.statement();
	                this.state = 38;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 39;
	            this.match(MiniCParser.T__6);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.match(MiniCParser.T__7);
	            this.state = 42;
	            this.match(MiniCParser.T__3);
	            this.state = 43;
	            this.expr(0);
	            this.state = 44;
	            this.match(MiniCParser.T__4);
	            this.state = 45;
	            this.match(MiniCParser.T__5);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2101000) !== 0)) {
	                this.state = 46;
	                this.statement();
	                this.state = 51;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 52;
	            this.match(MiniCParser.T__6);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.match(MiniCParser.T__8);
	            this.state = 55;
	            this.match(MiniCParser.T__5);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2101000) !== 0)) {
	                this.state = 56;
	                this.statement();
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 62;
	            this.match(MiniCParser.T__6);
	            this.state = 63;
	            this.match(MiniCParser.T__7);
	            this.state = 64;
	            this.match(MiniCParser.T__3);
	            this.state = 65;
	            this.expr(0);
	            this.state = 66;
	            this.match(MiniCParser.T__4);
	            this.state = 67;
	            this.match(MiniCParser.T__0);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 69;
	            this.match(MiniCParser.T__9);
	            this.state = 70;
	            this.match(MiniCParser.T__3);
	            this.state = 71;
	            this.expr(0);
	            this.state = 72;
	            this.match(MiniCParser.T__4);
	            this.state = 73;
	            this.match(MiniCParser.T__5);
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 74;
	                this.caseBlock();
	                this.state = 79;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 80;
	            this.match(MiniCParser.T__6);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 82;
	            this.match(MiniCParser.T__10);
	            this.state = 83;
	            this.match(MiniCParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseBlock() {
	    let localctx = new CaseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCParser.RULE_caseBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(MiniCParser.T__11);
	        this.state = 87;
	        this.match(MiniCParser.NUM);
	        this.state = 88;
	        this.match(MiniCParser.T__12);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2101000) !== 0)) {
	            this.state = 89;
	            this.statement();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, MiniCParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 96;
	            this.match(MiniCParser.ID);
	            break;
	        case 22:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(MiniCParser.NUM);
	            break;
	        case 4:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 98;
	            this.match(MiniCParser.T__3);
	            this.state = 99;
	            this.expr(0);
	            this.state = 100;
	            this.match(MiniCParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 110;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_expr);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 105;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 106;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_expr);
	                    this.state = 107;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 108;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 109;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 114;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCParser.EOF = antlr4.Token.EOF;
MiniCParser.T__0 = 1;
MiniCParser.T__1 = 2;
MiniCParser.T__2 = 3;
MiniCParser.T__3 = 4;
MiniCParser.T__4 = 5;
MiniCParser.T__5 = 6;
MiniCParser.T__6 = 7;
MiniCParser.T__7 = 8;
MiniCParser.T__8 = 9;
MiniCParser.T__9 = 10;
MiniCParser.T__10 = 11;
MiniCParser.T__11 = 12;
MiniCParser.T__12 = 13;
MiniCParser.T__13 = 14;
MiniCParser.T__14 = 15;
MiniCParser.T__15 = 16;
MiniCParser.T__16 = 17;
MiniCParser.T__17 = 18;
MiniCParser.T__18 = 19;
MiniCParser.T__19 = 20;
MiniCParser.ID = 21;
MiniCParser.NUM = 22;
MiniCParser.WS = 23;

MiniCParser.RULE_program = 0;
MiniCParser.RULE_declaration = 1;
MiniCParser.RULE_statement = 2;
MiniCParser.RULE_caseBlock = 3;
MiniCParser.RULE_expr = 4;
MiniCParser.RULE_tipo = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_program;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_declaration;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID() {
	    return this.getToken(MiniCParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_statement;
    }

	ID() {
	    return this.getToken(MiniCParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	caseBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseBlockContext);
	    } else {
	        return this.getTypedRuleContext(CaseBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_caseBlock;
    }

	NUM() {
	    return this.getToken(MiniCParser.NUM, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCaseBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCaseBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCaseBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MiniCParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(MiniCParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.IntContext = IntContext;

class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniCParser.ProgramContext = ProgramContext; 
MiniCParser.DeclarationContext = DeclarationContext; 
MiniCParser.StatementContext = StatementContext; 
MiniCParser.CaseBlockContext = CaseBlockContext; 
MiniCParser.ExprContext = ExprContext; 
MiniCParser.TipoContext = TipoContext; 
