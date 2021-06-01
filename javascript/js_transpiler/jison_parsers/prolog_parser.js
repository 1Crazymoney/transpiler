/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var prolog_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,21],$V2=[1,32],$V3=[1,29],$V4=[1,23],$V5=[1,25],$V6=[1,34],$V7=[1,30],$V8=[1,31],$V9=[1,33],$Va=[1,37],$Vb=[1,44],$Vc=[22,48,50],$Vd=[1,45],$Ve=[1,46],$Vf=[1,47],$Vg=[1,48],$Vh=[1,49],$Vi=[1,50],$Vj=[1,51],$Vk=[1,52],$Vl=[1,53],$Vm=[1,54],$Vn=[1,55],$Vo=[1,56],$Vp=[1,57],$Vq=[1,58],$Vr=[1,59],$Vs=[1,60],$Vt=[7,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],$Vu=[7,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,43,44],$Vv=[1,69],$Vw=[7,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,43,44,48,50],$Vx=[16,22,43],$Vy=[2,49],$Vz=[2,37],$VA=[2,15],$VB=[7,16,20,21,22,23,24,25,26,27,28,29,30],$VC=[7,16,20,21,22,23,24,25,26,27,28,29,30,31,32];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements_":4,"EOF":5,"top_level_statement":6,".":7,"top_level_statements":8,"predicate":9,"grammar_statement":10,"chr_statement":11,"function_call":12,"IDENTIFIER":13,"(":14,"exprs":15,")":16,":-":17,"e":18,"-->":19,"->":20,";":21,",":22,"=":23,"is":24,"\\\\=":25,"==":26,"=<":27,"<":28,">=":29,">":30,"+":31,"-":32,"*":33,"/":34,"not_expr":35,"\\+":36,"parentheses_expr":37,"parameter":38,"parameters":39,"forall_statement":40,"forall":41,"[":42,"]":43,"|":44,"NUMBER":45,"STRING_LITERAL":46,"chr_head":47,"==>":48,"@":49,"<=>":50,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:".",13:"IDENTIFIER",14:"(",16:")",17:":-",19:"-->",20:"->",21:";",22:",",23:"=",24:"is",25:"\\\\=",26:"==",27:"=<",28:"<",29:">=",30:">",31:"+",32:"-",33:"*",34:"/",36:"\\+",41:"forall",42:"[",43:"]",44:"|",45:"NUMBER",46:"STRING_LITERAL",48:"==>",49:"@",50:"<=>"},
productions_: [0,[3,2],[4,3],[4,2],[8,1],[6,1],[6,1],[6,1],[6,1],[9,6],[9,3],[10,3],[10,6],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,1],[35,2],[35,1],[38,1],[39,3],[39,1],[39,0],[12,3],[12,4],[40,6],[37,1],[37,1],[37,3],[37,2],[37,3],[37,5],[37,1],[37,1],[37,1],[15,3],[15,1],[47,3],[47,1],[11,5],[11,3],[11,7],[11,5],[11,5],[11,3],[11,7],[11,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 33:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 3:
this.$ =
 [$$[$0-1]];
break;
case 4:
this.$ = ["top_level_statements",$$[$0]]
break;
case 9:
this.$ = ["predicate",$$[$0-5],$$[$0-3],$$[$0]]
break;
case 10:
this.$ = ["predicate",$$[$0-2],[],$$[$0]]
break;
case 11:
this.$ = ["grammar_statement",$$[$0-2],$$[$0]]
break;
case 12:
this.$ = ["grammar_macro",$$[$0-5],$$[$0-3],$$[$0]]
break;
case 13:
this.$ = ["implies",$$[$0-2],$$[$0]]
break;
case 14:
this.$ = ['logic_or',$$[$0-2],$$[$0]];
break;
case 15:
this.$ = ['logic_and',$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ['logic_equals',$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ['set_var',$$[$0-2],$$[$0]];
break;
case 18:
this.$ = ['!=',$$[$0-2],$$[$0]];
break;
case 19: case 21: case 22: case 23: case 24: case 25: case 26: case 27:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 20:
this.$ = ['<=',$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["-",$$[$0]];
break;
case 30:
this.$ = ["!",$$[$0]];
break;
case 31:
this.$ = $$[$0];
break;
case 32:
this.$ = ["Object", $$[$0]];
break;
case 34:
this.$ =
 [$$[$0]];
break;
case 35:
this.$ = []
break;
case 36:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 37:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 38:
this.$ = ["forall","Object",$$[$0-3],$$[$0-1]];
break;
case 41:
this.$ = $$[$0-1];
break;
case 42:
this.$ = ["initializer_list","Object",[]];
break;
case 43:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 44:
this.$ = ["list_head_tail","Object",$$[$0-3],["initializer_list","Object",$$[$0-1]]];
break;
case 45: case 46: case 47:
this.$ = yytext;
break;
case 48:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 49: case 51:
this.$ = [$$[$0]];
break;
case 50:
this.$ = ["logic_and",$$[$0-2],$$[$0]];
break;
case 52:
this.$= ["propagation_rule",["&&",$$[$0-4],$$[$0-2]],$$[$0]]
break;
case 53:
this.$= ["propagation_rule",$$[$0-2],$$[$0]]
break;
case 54:
this.$= ["defrule",$$[$0-6],["&&",$$[$0-4],$$[$0-2]],$$[$0]]
break;
case 55:
this.$= ["defrule",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 56:
this.$= ["simplification_rule",["&&",$$[$0-4],$$[$0-2]],$$[$0]]
break;
case 57:
this.$= ["simplification_rule",$$[$0-2],$$[$0]]
break;
case 58:
this.$= ["named_simplification_rule",$$[$0-6],["&&",$$[$0-4],$$[$0-2]],$$[$0]]
break;
case 59:
this.$= ["named_simplification_rule",$$[$0-4],$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,9:4,10:5,11:6,12:7,13:$V0},{1:[3]},{5:[1,9]},{7:[1,10]},{7:[2,5]},{7:[2,6]},{7:[2,7]},{7:[2,8],22:[1,11],48:[1,12],50:[1,13]},{14:[1,14],17:[1,15],19:[1,16],49:[1,17]},{1:[2,1]},{4:18,5:[2,3],6:3,9:4,10:5,11:6,12:7,13:$V0},{12:20,13:$V1,47:19},{12:28,13:$V2,14:$V3,18:22,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:35,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,15:36,16:$Va,37:38,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:39,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:40,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:41,13:$V1},{5:[2,2]},{22:$Vb,48:[1,42],50:[1,43]},o($Vc,[2,51]),{14:$Vd},{7:[2,53],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{12:28,13:$V2,14:$V3,18:61,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o($Vt,[2,29]),{12:28,13:$V2,14:$V3,37:62,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o($Vt,[2,31]),o($Vu,[2,39]),o($Vu,[2,40]),{12:28,13:$V2,14:$V3,18:63,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,15:65,37:66,40:27,41:$V6,42:$V7,43:[1,64],45:$V8,46:$V9},o($Vu,[2,45]),o($Vu,[2,46],{14:$Vd}),o($Vu,[2,47]),{14:[1,67]},{7:[2,57],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{16:[1,68],22:$Vv},o($Vw,[2,36]),o($Vx,$Vy),{7:[2,10],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{7:[2,11],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{22:[1,70],48:[1,71],50:[1,72]},{12:28,13:$V2,14:$V3,18:73,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:74,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:75,13:$V1},{12:28,13:$V2,14:$V3,15:76,16:$Va,37:38,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:77,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:78,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:79,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:80,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:81,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:82,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:83,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:84,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:85,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:86,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:87,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:88,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:89,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:90,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:91,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o($Vt,[2,28]),o($Vt,[2,30]),{16:[1,92],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},o($Vu,[2,42]),{22:$Vv,43:[1,93]},o([22,43],$Vy,{44:[1,94]}),{12:28,13:$V2,14:$V3,18:95,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o([7,22,48,50],$Vz,{17:[1,96],19:[1,97]}),{12:28,13:$V2,14:$V3,37:98,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:20,13:$V1,47:99},{12:28,13:$V2,14:$V3,18:100,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:101,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{7:[2,52],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{7:[2,56],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},o($Vc,[2,50]),{16:[1,102],22:$Vv},o([7,16,20],[2,13],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o([7,16,20,21],[2,14],{22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o([7,16,20,21,22],$VA,{23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,16],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,17],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,18],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,19],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,20],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,21],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,22],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VB,[2,23],{31:$Vp,32:$Vq,33:$Vr,34:$Vs}),o($VC,[2,24],{33:$Vr,34:$Vs}),o($VC,[2,25],{33:$Vr,34:$Vs}),o($Vt,[2,26]),o($Vt,[2,27]),o($Vu,[2,41]),o($Vu,[2,43]),{12:28,13:$V2,14:$V3,15:103,37:38,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{20:$Ve,21:$Vf,22:[1,104],23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{12:28,13:$V2,14:$V3,18:105,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:106,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o($Vx,[2,48]),{22:$Vb,48:[1,107],50:[1,108]},{7:[2,55],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{7:[2,59],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},o($Vw,$Vz),{22:$Vv,43:[1,109]},{12:28,13:$V2,14:$V3,18:110,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{7:[2,9],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{7:[2,12],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{12:28,13:$V2,14:$V3,18:111,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},{12:28,13:$V2,14:$V3,18:112,32:$V4,35:24,36:$V5,37:26,40:27,41:$V6,42:$V7,45:$V8,46:$V9},o($Vu,[2,44]),o([20,21,22],$VA,{16:[1,113],23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs}),{7:[2,54],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},{7:[2,58],20:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs},o($Vu,[2,38])],
defaultActions: {4:[2,5],5:[2,6],6:[2,7],9:[2,1],18:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:return 45
break;
case 3:return 46
break;
case 4:return 41
break;
case 5:return 'copy_term'
break;
case 6:return "if"
break;
case 7:return "is"
break;
case 8:return 22
break;
case 9:return 21
break;
case 10:return '--->'
break;
case 11:return 48
break;
case 12:return 50
break;
case 13:return 49
break;
case 14:return 19
break;
case 15:return 20
break;
case 16:return 17
break;
case 17:return 7
break;
case 18:return ':'
break;
case 19:return 29
break;
case 20:return 30
break;
case 21:return 27
break;
case 22:return 28
break;
case 23:return 26
break;
case 24:return 23
break;
case 25:return '*='
break;
case 26:return 33
break;
case 27:return 25
break;
case 28:return 34
break;
case 29:return '-='
break;
case 30:return '--'
break;
case 31:return 32
break;
case 32:return '++'
break;
case 33:return '+='
break;
case 34:return 31
break;
case 35:return '^'
break;
case 36:return '{'
break;
case 37:return '}'
break;
case 38:return 44
break;
case 39:return 42
break;
case 40:return 43
break;
case 41:return 14
break;
case 42:return 16
break;
case 43:return 13
break;
case 44:return 5
break;
case 45:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:%.*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:forall\b)/,/^(?:copy_term\b)/,/^(?:if\b)/,/^(?:is\b)/,/^(?:,)/,/^(?:;)/,/^(?:--->)/,/^(?:==>)/,/^(?:<=>)/,/^(?:@)/,/^(?:-->)/,/^(?:->)/,/^(?::-)/,/^(?:\.)/,/^(?::)/,/^(?:>=)/,/^(?:>)/,/^(?:=<)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\\=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\|)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = prolog_parser;
exports.Parser = prolog_parser.Parser;
exports.parse = function () { return prolog_parser.parse.apply(prolog_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}