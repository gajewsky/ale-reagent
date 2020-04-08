goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37067__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37068__i = 0, G__37068__a = new Array(arguments.length -  0);
while (G__37068__i < G__37068__a.length) {G__37068__a[G__37068__i] = arguments[G__37068__i + 0]; ++G__37068__i;}
  args = new cljs.core.IndexedSeq(G__37068__a,0,null);
} 
return G__37067__delegate.call(this,args);};
G__37067.cljs$lang$maxFixedArity = 0;
G__37067.cljs$lang$applyTo = (function (arglist__37069){
var args = cljs.core.seq(arglist__37069);
return G__37067__delegate(args);
});
G__37067.cljs$core$IFn$_invoke$arity$variadic = G__37067__delegate;
return G__37067;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37070__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37072__i = 0, G__37072__a = new Array(arguments.length -  0);
while (G__37072__i < G__37072__a.length) {G__37072__a[G__37072__i] = arguments[G__37072__i + 0]; ++G__37072__i;}
  args = new cljs.core.IndexedSeq(G__37072__a,0,null);
} 
return G__37070__delegate.call(this,args);};
G__37070.cljs$lang$maxFixedArity = 0;
G__37070.cljs$lang$applyTo = (function (arglist__37073){
var args = cljs.core.seq(arglist__37073);
return G__37070__delegate(args);
});
G__37070.cljs$core$IFn$_invoke$arity$variadic = G__37070__delegate;
return G__37070;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
