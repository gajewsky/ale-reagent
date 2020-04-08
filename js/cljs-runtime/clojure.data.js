goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26707){
var vec__26708 = p__26707;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26708,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26711 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26727 = arguments.length;
switch (G__26727) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26758_26870 = clojure.data.equality_partition;
var G__26759_26871 = "null";
var G__26760_26872 = ((function (G__26758_26870,G__26759_26871){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26758_26870,G__26759_26871))
;
goog.object.set(G__26758_26870,G__26759_26871,G__26760_26872);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26761_26873 = clojure.data.equality_partition;
var G__26762_26874 = "string";
var G__26763_26875 = ((function (G__26761_26873,G__26762_26874){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26761_26873,G__26762_26874))
;
goog.object.set(G__26761_26873,G__26762_26874,G__26763_26875);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26764_26876 = clojure.data.equality_partition;
var G__26765_26877 = "number";
var G__26766_26878 = ((function (G__26764_26876,G__26765_26877){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26764_26876,G__26765_26877))
;
goog.object.set(G__26764_26876,G__26765_26877,G__26766_26878);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26780_26879 = clojure.data.equality_partition;
var G__26781_26880 = "array";
var G__26782_26881 = ((function (G__26780_26879,G__26781_26880){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26780_26879,G__26781_26880))
;
goog.object.set(G__26780_26879,G__26781_26880,G__26782_26881);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26785_26884 = clojure.data.equality_partition;
var G__26786_26885 = "function";
var G__26787_26886 = ((function (G__26785_26884,G__26786_26885){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26785_26884,G__26786_26885))
;
goog.object.set(G__26785_26884,G__26786_26885,G__26787_26886);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26789_26887 = clojure.data.equality_partition;
var G__26790_26888 = "boolean";
var G__26791_26889 = ((function (G__26789_26887,G__26790_26888){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26789_26887,G__26790_26888))
;
goog.object.set(G__26789_26887,G__26790_26888,G__26791_26889);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26792_26890 = clojure.data.equality_partition;
var G__26793_26891 = "_";
var G__26794_26892 = ((function (G__26792_26890,G__26793_26891){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26792_26890,G__26793_26891))
;
goog.object.set(G__26792_26890,G__26793_26891,G__26794_26892);
goog.object.set(clojure.data.Diff,"null",true);

var G__26804_26896 = clojure.data.diff_similar;
var G__26805_26897 = "null";
var G__26806_26898 = ((function (G__26804_26896,G__26805_26897){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26804_26896,G__26805_26897))
;
goog.object.set(G__26804_26896,G__26805_26897,G__26806_26898);

goog.object.set(clojure.data.Diff,"string",true);

var G__26807_26901 = clojure.data.diff_similar;
var G__26808_26902 = "string";
var G__26809_26903 = ((function (G__26807_26901,G__26808_26902){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26807_26901,G__26808_26902))
;
goog.object.set(G__26807_26901,G__26808_26902,G__26809_26903);

goog.object.set(clojure.data.Diff,"number",true);

var G__26810_26907 = clojure.data.diff_similar;
var G__26811_26908 = "number";
var G__26812_26909 = ((function (G__26810_26907,G__26811_26908){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26810_26907,G__26811_26908))
;
goog.object.set(G__26810_26907,G__26811_26908,G__26812_26909);

goog.object.set(clojure.data.Diff,"array",true);

var G__26813_26910 = clojure.data.diff_similar;
var G__26814_26911 = "array";
var G__26815_26912 = ((function (G__26813_26910,G__26814_26911){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26813_26910,G__26814_26911))
;
goog.object.set(G__26813_26910,G__26814_26911,G__26815_26912);

goog.object.set(clojure.data.Diff,"function",true);

var G__26816_26914 = clojure.data.diff_similar;
var G__26817_26915 = "function";
var G__26818_26916 = ((function (G__26816_26914,G__26817_26915){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26816_26914,G__26817_26915))
;
goog.object.set(G__26816_26914,G__26817_26915,G__26818_26916);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26843_26917 = clojure.data.diff_similar;
var G__26844_26918 = "boolean";
var G__26845_26919 = ((function (G__26843_26917,G__26844_26918){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26843_26917,G__26844_26918))
;
goog.object.set(G__26843_26917,G__26844_26918,G__26845_26919);

goog.object.set(clojure.data.Diff,"_",true);

var G__26846_26921 = clojure.data.diff_similar;
var G__26847_26922 = "_";
var G__26848_26923 = ((function (G__26846_26921,G__26847_26922){
return (function (a,b){
var fexpr__26852 = (function (){var G__26853 = clojure.data.equality_partition(a);
var G__26853__$1 = (((G__26853 instanceof cljs.core.Keyword))?G__26853.fqn:null);
switch (G__26853__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26853__$1)].join('')));

}
})();
return (fexpr__26852.cljs$core$IFn$_invoke$arity$2 ? fexpr__26852.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26852.call(null,a,b));
});})(G__26846_26921,G__26847_26922))
;
goog.object.set(G__26846_26921,G__26847_26922,G__26848_26923);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
