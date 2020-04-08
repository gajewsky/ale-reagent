goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31217){
var map__31218 = p__31217;
var map__31218__$1 = (((((!((map__31218 == null))))?(((((map__31218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31218):map__31218);
var m = map__31218__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31218__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31218__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31220_31341 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31221_31342 = null;
var count__31222_31343 = (0);
var i__31223_31344 = (0);
while(true){
if((i__31223_31344 < count__31222_31343)){
var f_31345 = chunk__31221_31342.cljs$core$IIndexed$_nth$arity$2(null,i__31223_31344);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31345], 0));


var G__31346 = seq__31220_31341;
var G__31347 = chunk__31221_31342;
var G__31348 = count__31222_31343;
var G__31349 = (i__31223_31344 + (1));
seq__31220_31341 = G__31346;
chunk__31221_31342 = G__31347;
count__31222_31343 = G__31348;
i__31223_31344 = G__31349;
continue;
} else {
var temp__5735__auto___31350 = cljs.core.seq(seq__31220_31341);
if(temp__5735__auto___31350){
var seq__31220_31351__$1 = temp__5735__auto___31350;
if(cljs.core.chunked_seq_QMARK_(seq__31220_31351__$1)){
var c__4550__auto___31352 = cljs.core.chunk_first(seq__31220_31351__$1);
var G__31353 = cljs.core.chunk_rest(seq__31220_31351__$1);
var G__31354 = c__4550__auto___31352;
var G__31355 = cljs.core.count(c__4550__auto___31352);
var G__31356 = (0);
seq__31220_31341 = G__31353;
chunk__31221_31342 = G__31354;
count__31222_31343 = G__31355;
i__31223_31344 = G__31356;
continue;
} else {
var f_31357 = cljs.core.first(seq__31220_31351__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31357], 0));


var G__31358 = cljs.core.next(seq__31220_31351__$1);
var G__31359 = null;
var G__31360 = (0);
var G__31361 = (0);
seq__31220_31341 = G__31358;
chunk__31221_31342 = G__31359;
count__31222_31343 = G__31360;
i__31223_31344 = G__31361;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31362 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31362], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31362)))?cljs.core.second(arglists_31362):arglists_31362)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31231_31363 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31232_31364 = null;
var count__31233_31365 = (0);
var i__31234_31366 = (0);
while(true){
if((i__31234_31366 < count__31233_31365)){
var vec__31245_31367 = chunk__31232_31364.cljs$core$IIndexed$_nth$arity$2(null,i__31234_31366);
var name_31368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31245_31367,(0),null);
var map__31248_31369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31245_31367,(1),null);
var map__31248_31370__$1 = (((((!((map__31248_31369 == null))))?(((((map__31248_31369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31248_31369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31248_31369):map__31248_31369);
var doc_31371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31248_31370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31248_31370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31368], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31372], 0));

if(cljs.core.truth_(doc_31371)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31371], 0));
} else {
}


var G__31373 = seq__31231_31363;
var G__31374 = chunk__31232_31364;
var G__31375 = count__31233_31365;
var G__31376 = (i__31234_31366 + (1));
seq__31231_31363 = G__31373;
chunk__31232_31364 = G__31374;
count__31233_31365 = G__31375;
i__31234_31366 = G__31376;
continue;
} else {
var temp__5735__auto___31377 = cljs.core.seq(seq__31231_31363);
if(temp__5735__auto___31377){
var seq__31231_31378__$1 = temp__5735__auto___31377;
if(cljs.core.chunked_seq_QMARK_(seq__31231_31378__$1)){
var c__4550__auto___31379 = cljs.core.chunk_first(seq__31231_31378__$1);
var G__31380 = cljs.core.chunk_rest(seq__31231_31378__$1);
var G__31381 = c__4550__auto___31379;
var G__31382 = cljs.core.count(c__4550__auto___31379);
var G__31383 = (0);
seq__31231_31363 = G__31380;
chunk__31232_31364 = G__31381;
count__31233_31365 = G__31382;
i__31234_31366 = G__31383;
continue;
} else {
var vec__31250_31384 = cljs.core.first(seq__31231_31378__$1);
var name_31385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250_31384,(0),null);
var map__31253_31386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250_31384,(1),null);
var map__31253_31387__$1 = (((((!((map__31253_31386 == null))))?(((((map__31253_31386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253_31386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31253_31386):map__31253_31386);
var doc_31388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253_31387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253_31387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31389], 0));

if(cljs.core.truth_(doc_31388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31388], 0));
} else {
}


var G__31390 = cljs.core.next(seq__31231_31378__$1);
var G__31391 = null;
var G__31392 = (0);
var G__31393 = (0);
seq__31231_31363 = G__31390;
chunk__31232_31364 = G__31391;
count__31233_31365 = G__31392;
i__31234_31366 = G__31393;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31255 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31256 = null;
var count__31257 = (0);
var i__31258 = (0);
while(true){
if((i__31258 < count__31257)){
var role = chunk__31256.cljs$core$IIndexed$_nth$arity$2(null,i__31258);
var temp__5735__auto___31394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31394__$1)){
var spec_31395 = temp__5735__auto___31394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31395)], 0));
} else {
}


var G__31396 = seq__31255;
var G__31397 = chunk__31256;
var G__31398 = count__31257;
var G__31399 = (i__31258 + (1));
seq__31255 = G__31396;
chunk__31256 = G__31397;
count__31257 = G__31398;
i__31258 = G__31399;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31255);
if(temp__5735__auto____$1){
var seq__31255__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31255__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31255__$1);
var G__31400 = cljs.core.chunk_rest(seq__31255__$1);
var G__31401 = c__4550__auto__;
var G__31402 = cljs.core.count(c__4550__auto__);
var G__31403 = (0);
seq__31255 = G__31400;
chunk__31256 = G__31401;
count__31257 = G__31402;
i__31258 = G__31403;
continue;
} else {
var role = cljs.core.first(seq__31255__$1);
var temp__5735__auto___31404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31404__$2)){
var spec_31405 = temp__5735__auto___31404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31405)], 0));
} else {
}


var G__31406 = cljs.core.next(seq__31255__$1);
var G__31407 = null;
var G__31408 = (0);
var G__31409 = (0);
seq__31255 = G__31406;
chunk__31256 = G__31407;
count__31257 = G__31408;
i__31258 = G__31409;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31411 = cljs.core.ex_cause(t);
via = G__31410;
t = G__31411;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31266 = datafied_throwable;
var map__31266__$1 = (((((!((map__31266 == null))))?(((((map__31266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31266):map__31266);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31266__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31267 = cljs.core.last(via);
var map__31267__$1 = (((((!((map__31267 == null))))?(((((map__31267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31267):map__31267);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31268 = data;
var map__31268__$1 = (((((!((map__31268 == null))))?(((((map__31268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31268):map__31268);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31269 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31269__$1 = (((((!((map__31269 == null))))?(((((map__31269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31269):map__31269);
var top_data = map__31269__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31274 = phase;
var G__31274__$1 = (((G__31274 instanceof cljs.core.Keyword))?G__31274.fqn:null);
switch (G__31274__$1) {
case "read-source":
var map__31275 = data;
var map__31275__$1 = (((((!((map__31275 == null))))?(((((map__31275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31275):map__31275);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31277__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31277,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31277);
var G__31277__$2 = (cljs.core.truth_((function (){var fexpr__31278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31278.cljs$core$IFn$_invoke$arity$1 ? fexpr__31278.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31278.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31277__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31277__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31277__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31279 = top_data;
var G__31279__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31279,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31279);
var G__31279__$2 = (cljs.core.truth_((function (){var fexpr__31280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31280.cljs$core$IFn$_invoke$arity$1 ? fexpr__31280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31279__$1);
var G__31279__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31279__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31279__$2);
var G__31279__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31279__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31279__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31281 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281,(3),null);
var G__31284 = top_data;
var G__31284__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31284,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31284);
var G__31284__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31284__$1);
var G__31284__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31284__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31284__$2);
var G__31284__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31284__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31284__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31284__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31284__$4;
}

break;
case "execution":
var vec__31285 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31285,source__$1,method,file,line,G__31274,G__31274__$1,map__31266,map__31266__$1,via,trace,phase,map__31267,map__31267__$1,type,message,data,map__31268,map__31268__$1,problems,fn,caller,map__31269,map__31269__$1,top_data,source){
return (function (p1__31265_SHARP_){
var or__4131__auto__ = (p1__31265_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31289.cljs$core$IFn$_invoke$arity$1 ? fexpr__31289.cljs$core$IFn$_invoke$arity$1(p1__31265_SHARP_) : fexpr__31289.call(null,p1__31265_SHARP_));
}
});})(vec__31285,source__$1,method,file,line,G__31274,G__31274__$1,map__31266,map__31266__$1,via,trace,phase,map__31267,map__31267__$1,type,message,data,map__31268,map__31268__$1,problems,fn,caller,map__31269,map__31269__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31291 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31291__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31291,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31291);
var G__31291__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31291__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31291__$1);
var G__31291__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31291__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31291__$2);
var G__31291__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31291__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31291__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31291__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31291__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31274__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31299){
var map__31300 = p__31299;
var map__31300__$1 = (((((!((map__31300 == null))))?(((((map__31300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31300):map__31300);
var triage_data = map__31300__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31302 = phase;
var G__31302__$1 = (((G__31302 instanceof cljs.core.Keyword))?G__31302.fqn:null);
switch (G__31302__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31303 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31305 = loc;
var G__31306 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31307_31424 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31308_31425 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31309_31426 = true;
var _STAR_print_fn_STAR__temp_val__31310_31427 = ((function (_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31309_31426;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31310_31427;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,_STAR_print_fn_STAR__temp_val__31310_31427,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,_STAR_print_fn_STAR__temp_val__31310_31427,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31297_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31297_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,_STAR_print_fn_STAR__temp_val__31310_31427,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31307_31424,_STAR_print_fn_STAR__orig_val__31308_31425,_STAR_print_newline_STAR__temp_val__31309_31426,_STAR_print_fn_STAR__temp_val__31310_31427,sb__4661__auto__,G__31303,G__31304,G__31305,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31308_31425;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31307_31424;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31303,G__31304,G__31305,G__31306) : format.call(null,G__31303,G__31304,G__31305,G__31306));

break;
case "macroexpansion":
var G__31311 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31312 = cause_type;
var G__31313 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31314 = loc;
var G__31315 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31311,G__31312,G__31313,G__31314,G__31315) : format.call(null,G__31311,G__31312,G__31313,G__31314,G__31315));

break;
case "compile-syntax-check":
var G__31316 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31317 = cause_type;
var G__31318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31319 = loc;
var G__31320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31316,G__31317,G__31318,G__31319,G__31320) : format.call(null,G__31316,G__31317,G__31318,G__31319,G__31320));

break;
case "compilation":
var G__31321 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31322 = cause_type;
var G__31323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31324 = loc;
var G__31325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31321,G__31322,G__31323,G__31324,G__31325) : format.call(null,G__31321,G__31322,G__31323,G__31324,G__31325));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31326 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31327 = symbol;
var G__31328 = loc;
var G__31329 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31330_31432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31331_31433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31332_31434 = true;
var _STAR_print_fn_STAR__temp_val__31333_31435 = ((function (_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31332_31434;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31333_31435;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,_STAR_print_fn_STAR__temp_val__31333_31435,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,_STAR_print_fn_STAR__temp_val__31333_31435,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31298_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31298_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,_STAR_print_fn_STAR__temp_val__31333_31435,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31330_31432,_STAR_print_fn_STAR__orig_val__31331_31433,_STAR_print_newline_STAR__temp_val__31332_31434,_STAR_print_fn_STAR__temp_val__31333_31435,sb__4661__auto__,G__31326,G__31327,G__31328,G__31302,G__31302__$1,loc,class_name,simple_class,cause_type,format,map__31300,map__31300__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31331_31433;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31330_31432;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31326,G__31327,G__31328,G__31329) : format.call(null,G__31326,G__31327,G__31328,G__31329));
} else {
var G__31334 = "Execution error%s at %s(%s).\n%s\n";
var G__31335 = cause_type;
var G__31336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31337 = loc;
var G__31338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31334,G__31335,G__31336,G__31337,G__31338) : format.call(null,G__31334,G__31335,G__31336,G__31337,G__31338));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31302__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
