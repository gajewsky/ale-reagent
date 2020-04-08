goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37257 = arguments.length;
var i__4731__auto___37258 = (0);
while(true){
if((i__4731__auto___37258 < len__4730__auto___37257)){
args__4736__auto__.push((arguments[i__4731__auto___37258]));

var G__37259 = (i__4731__auto___37258 + (1));
i__4731__auto___37258 = G__37259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37046){
var G__37047 = cljs.core.first(seq37046);
var seq37046__$1 = cljs.core.next(seq37046);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37047,seq37046__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37051){
var map__37052 = p__37051;
var map__37052__$1 = (((((!((map__37052 == null))))?(((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37052):map__37052);
var src = map__37052__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37062 = cljs.core.seq(sources);
var chunk__37063 = null;
var count__37064 = (0);
var i__37065 = (0);
while(true){
if((i__37065 < count__37064)){
var map__37091 = chunk__37063.cljs$core$IIndexed$_nth$arity$2(null,i__37065);
var map__37091__$1 = (((((!((map__37091 == null))))?(((((map__37091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37091):map__37091);
var src = map__37091__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37094){var e_37260 = e37094;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37260);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37260.message)].join('')));
}

var G__37261 = seq__37062;
var G__37262 = chunk__37063;
var G__37263 = count__37064;
var G__37264 = (i__37065 + (1));
seq__37062 = G__37261;
chunk__37063 = G__37262;
count__37064 = G__37263;
i__37065 = G__37264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37062);
if(temp__5735__auto__){
var seq__37062__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37062__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37062__$1);
var G__37265 = cljs.core.chunk_rest(seq__37062__$1);
var G__37266 = c__4550__auto__;
var G__37267 = cljs.core.count(c__4550__auto__);
var G__37268 = (0);
seq__37062 = G__37265;
chunk__37063 = G__37266;
count__37064 = G__37267;
i__37065 = G__37268;
continue;
} else {
var map__37099 = cljs.core.first(seq__37062__$1);
var map__37099__$1 = (((((!((map__37099 == null))))?(((((map__37099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37099):map__37099);
var src = map__37099__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37102){var e_37269 = e37102;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37269);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37269.message)].join('')));
}

var G__37270 = cljs.core.next(seq__37062__$1);
var G__37271 = null;
var G__37272 = (0);
var G__37273 = (0);
seq__37062 = G__37270;
chunk__37063 = G__37271;
count__37064 = G__37272;
i__37065 = G__37273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37111 = cljs.core.seq(js_requires);
var chunk__37112 = null;
var count__37113 = (0);
var i__37114 = (0);
while(true){
if((i__37114 < count__37113)){
var js_ns = chunk__37112.cljs$core$IIndexed$_nth$arity$2(null,i__37114);
var require_str_37274 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37274);


var G__37275 = seq__37111;
var G__37276 = chunk__37112;
var G__37277 = count__37113;
var G__37278 = (i__37114 + (1));
seq__37111 = G__37275;
chunk__37112 = G__37276;
count__37113 = G__37277;
i__37114 = G__37278;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37111);
if(temp__5735__auto__){
var seq__37111__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37111__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37111__$1);
var G__37279 = cljs.core.chunk_rest(seq__37111__$1);
var G__37280 = c__4550__auto__;
var G__37281 = cljs.core.count(c__4550__auto__);
var G__37282 = (0);
seq__37111 = G__37279;
chunk__37112 = G__37280;
count__37113 = G__37281;
i__37114 = G__37282;
continue;
} else {
var js_ns = cljs.core.first(seq__37111__$1);
var require_str_37283 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37283);


var G__37284 = cljs.core.next(seq__37111__$1);
var G__37285 = null;
var G__37286 = (0);
var G__37287 = (0);
seq__37111 = G__37284;
chunk__37112 = G__37285;
count__37113 = G__37286;
i__37114 = G__37287;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37123 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37123) : callback.call(null,G__37123));
} else {
var G__37124 = shadow.cljs.devtools.client.env.files_url();
var G__37125 = ((function (G__37124){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37124))
;
var G__37126 = "POST";
var G__37127 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37128 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37124,G__37125,G__37126,G__37127,G__37128);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37133){
var map__37134 = p__37133;
var map__37134__$1 = (((((!((map__37134 == null))))?(((((map__37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37134):map__37134);
var msg = map__37134__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37136 = info;
var map__37136__$1 = (((((!((map__37136 == null))))?(((((map__37136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37136):map__37136);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37142(s__37143){
return (new cljs.core.LazySeq(null,((function (map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info){
return (function (){
var s__37143__$1 = s__37143;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37143__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37148 = cljs.core.first(xs__6292__auto__);
var map__37148__$1 = (((((!((map__37148 == null))))?(((((map__37148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37148):map__37148);
var src = map__37148__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37148__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37148__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37143__$1,map__37148,map__37148__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37142_$_iter__37144(s__37145){
return (new cljs.core.LazySeq(null,((function (s__37143__$1,map__37148,map__37148__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info){
return (function (){
var s__37145__$1 = s__37145;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37145__$1);
if(temp__5735__auto____$1){
var s__37145__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37145__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37145__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37147 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37146 = (0);
while(true){
if((i__37146 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37146);
cljs.core.chunk_append(b__37147,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37288 = (i__37146 + (1));
i__37146 = G__37288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37147),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37142_$_iter__37144(cljs.core.chunk_rest(s__37145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37147),null);
}
} else {
var warning = cljs.core.first(s__37145__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37142_$_iter__37144(cljs.core.rest(s__37145__$2)));
}
} else {
return null;
}
break;
}
});})(s__37143__$1,map__37148,map__37148__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info))
,null,null));
});})(s__37143__$1,map__37148,map__37148__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37142(cljs.core.rest(s__37143__$1)));
} else {
var G__37289 = cljs.core.rest(s__37143__$1);
s__37143__$1 = G__37289;
continue;
}
} else {
var G__37290 = cljs.core.rest(s__37143__$1);
s__37143__$1 = G__37290;
continue;
}
} else {
return null;
}
break;
}
});})(map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info))
,null,null));
});})(map__37136,map__37136__$1,sources,compiled,map__37134,map__37134__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37151_37291 = cljs.core.seq(warnings);
var chunk__37152_37292 = null;
var count__37153_37293 = (0);
var i__37154_37294 = (0);
while(true){
if((i__37154_37294 < count__37153_37293)){
var map__37159_37295 = chunk__37152_37292.cljs$core$IIndexed$_nth$arity$2(null,i__37154_37294);
var map__37159_37296__$1 = (((((!((map__37159_37295 == null))))?(((((map__37159_37295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159_37295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37159_37295):map__37159_37295);
var w_37297 = map__37159_37296__$1;
var msg_37298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37296__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37296__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37296__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37296__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37301)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37299),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37300),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37298__$1)].join(''));


var G__37302 = seq__37151_37291;
var G__37303 = chunk__37152_37292;
var G__37304 = count__37153_37293;
var G__37305 = (i__37154_37294 + (1));
seq__37151_37291 = G__37302;
chunk__37152_37292 = G__37303;
count__37153_37293 = G__37304;
i__37154_37294 = G__37305;
continue;
} else {
var temp__5735__auto___37306 = cljs.core.seq(seq__37151_37291);
if(temp__5735__auto___37306){
var seq__37151_37307__$1 = temp__5735__auto___37306;
if(cljs.core.chunked_seq_QMARK_(seq__37151_37307__$1)){
var c__4550__auto___37308 = cljs.core.chunk_first(seq__37151_37307__$1);
var G__37309 = cljs.core.chunk_rest(seq__37151_37307__$1);
var G__37310 = c__4550__auto___37308;
var G__37311 = cljs.core.count(c__4550__auto___37308);
var G__37312 = (0);
seq__37151_37291 = G__37309;
chunk__37152_37292 = G__37310;
count__37153_37293 = G__37311;
i__37154_37294 = G__37312;
continue;
} else {
var map__37161_37313 = cljs.core.first(seq__37151_37307__$1);
var map__37161_37314__$1 = (((((!((map__37161_37313 == null))))?(((((map__37161_37313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37161_37313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37161_37313):map__37161_37313);
var w_37315 = map__37161_37314__$1;
var msg_37316__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37314__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37314__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37314__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37314__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37319)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37317),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37318),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37316__$1)].join(''));


var G__37320 = cljs.core.next(seq__37151_37307__$1);
var G__37321 = null;
var G__37322 = (0);
var G__37323 = (0);
seq__37151_37291 = G__37320;
chunk__37152_37292 = G__37321;
count__37153_37293 = G__37322;
i__37154_37294 = G__37323;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info){
return (function (p__37163){
var map__37164 = p__37163;
var map__37164__$1 = (((((!((map__37164 == null))))?(((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37164):map__37164);
var src = map__37164__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info){
return (function (p__37166){
var map__37167 = p__37166;
var map__37167__$1 = (((((!((map__37167 == null))))?(((((map__37167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37167):map__37167);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info){
return (function (p__37169){
var map__37170 = p__37169;
var map__37170__$1 = (((((!((map__37170 == null))))?(((((map__37170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37170):map__37170);
var rc = map__37170__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37170__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info){
return (function (p1__37132_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37132_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37136,map__37136__$1,sources,compiled,warnings,map__37134,map__37134__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37174){
var map__37175 = p__37174;
var map__37175__$1 = (((((!((map__37175 == null))))?(((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37175):map__37175);
var msg = map__37175__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37177 = cljs.core.seq(updates);
var chunk__37179 = null;
var count__37180 = (0);
var i__37181 = (0);
while(true){
if((i__37181 < count__37180)){
var path = chunk__37179.cljs$core$IIndexed$_nth$arity$2(null,i__37181);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37207_37324 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37210_37325 = null;
var count__37211_37326 = (0);
var i__37212_37327 = (0);
while(true){
if((i__37212_37327 < count__37211_37326)){
var node_37328 = chunk__37210_37325.cljs$core$IIndexed$_nth$arity$2(null,i__37212_37327);
var path_match_37329 = shadow.cljs.devtools.client.browser.match_paths(node_37328.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37329)){
var new_link_37330 = (function (){var G__37217 = node_37328.cloneNode(true);
G__37217.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37329),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37217;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37329], 0));

goog.dom.insertSiblingAfter(new_link_37330,node_37328);

goog.dom.removeNode(node_37328);


var G__37331 = seq__37207_37324;
var G__37332 = chunk__37210_37325;
var G__37333 = count__37211_37326;
var G__37334 = (i__37212_37327 + (1));
seq__37207_37324 = G__37331;
chunk__37210_37325 = G__37332;
count__37211_37326 = G__37333;
i__37212_37327 = G__37334;
continue;
} else {
var G__37335 = seq__37207_37324;
var G__37336 = chunk__37210_37325;
var G__37337 = count__37211_37326;
var G__37338 = (i__37212_37327 + (1));
seq__37207_37324 = G__37335;
chunk__37210_37325 = G__37336;
count__37211_37326 = G__37337;
i__37212_37327 = G__37338;
continue;
}
} else {
var temp__5735__auto___37339 = cljs.core.seq(seq__37207_37324);
if(temp__5735__auto___37339){
var seq__37207_37340__$1 = temp__5735__auto___37339;
if(cljs.core.chunked_seq_QMARK_(seq__37207_37340__$1)){
var c__4550__auto___37341 = cljs.core.chunk_first(seq__37207_37340__$1);
var G__37342 = cljs.core.chunk_rest(seq__37207_37340__$1);
var G__37343 = c__4550__auto___37341;
var G__37344 = cljs.core.count(c__4550__auto___37341);
var G__37345 = (0);
seq__37207_37324 = G__37342;
chunk__37210_37325 = G__37343;
count__37211_37326 = G__37344;
i__37212_37327 = G__37345;
continue;
} else {
var node_37346 = cljs.core.first(seq__37207_37340__$1);
var path_match_37347 = shadow.cljs.devtools.client.browser.match_paths(node_37346.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37347)){
var new_link_37348 = (function (){var G__37218 = node_37346.cloneNode(true);
G__37218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37347),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37218;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37347], 0));

goog.dom.insertSiblingAfter(new_link_37348,node_37346);

goog.dom.removeNode(node_37346);


var G__37349 = cljs.core.next(seq__37207_37340__$1);
var G__37350 = null;
var G__37351 = (0);
var G__37352 = (0);
seq__37207_37324 = G__37349;
chunk__37210_37325 = G__37350;
count__37211_37326 = G__37351;
i__37212_37327 = G__37352;
continue;
} else {
var G__37353 = cljs.core.next(seq__37207_37340__$1);
var G__37354 = null;
var G__37355 = (0);
var G__37356 = (0);
seq__37207_37324 = G__37353;
chunk__37210_37325 = G__37354;
count__37211_37326 = G__37355;
i__37212_37327 = G__37356;
continue;
}
}
} else {
}
}
break;
}


var G__37357 = seq__37177;
var G__37358 = chunk__37179;
var G__37359 = count__37180;
var G__37360 = (i__37181 + (1));
seq__37177 = G__37357;
chunk__37179 = G__37358;
count__37180 = G__37359;
i__37181 = G__37360;
continue;
} else {
var G__37361 = seq__37177;
var G__37362 = chunk__37179;
var G__37363 = count__37180;
var G__37364 = (i__37181 + (1));
seq__37177 = G__37361;
chunk__37179 = G__37362;
count__37180 = G__37363;
i__37181 = G__37364;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37177);
if(temp__5735__auto__){
var seq__37177__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37177__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37177__$1);
var G__37365 = cljs.core.chunk_rest(seq__37177__$1);
var G__37366 = c__4550__auto__;
var G__37367 = cljs.core.count(c__4550__auto__);
var G__37368 = (0);
seq__37177 = G__37365;
chunk__37179 = G__37366;
count__37180 = G__37367;
i__37181 = G__37368;
continue;
} else {
var path = cljs.core.first(seq__37177__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37219_37369 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37222_37370 = null;
var count__37223_37371 = (0);
var i__37224_37372 = (0);
while(true){
if((i__37224_37372 < count__37223_37371)){
var node_37373 = chunk__37222_37370.cljs$core$IIndexed$_nth$arity$2(null,i__37224_37372);
var path_match_37374 = shadow.cljs.devtools.client.browser.match_paths(node_37373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37374)){
var new_link_37375 = (function (){var G__37229 = node_37373.cloneNode(true);
G__37229.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37229;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37374], 0));

goog.dom.insertSiblingAfter(new_link_37375,node_37373);

goog.dom.removeNode(node_37373);


var G__37376 = seq__37219_37369;
var G__37377 = chunk__37222_37370;
var G__37378 = count__37223_37371;
var G__37379 = (i__37224_37372 + (1));
seq__37219_37369 = G__37376;
chunk__37222_37370 = G__37377;
count__37223_37371 = G__37378;
i__37224_37372 = G__37379;
continue;
} else {
var G__37380 = seq__37219_37369;
var G__37381 = chunk__37222_37370;
var G__37382 = count__37223_37371;
var G__37383 = (i__37224_37372 + (1));
seq__37219_37369 = G__37380;
chunk__37222_37370 = G__37381;
count__37223_37371 = G__37382;
i__37224_37372 = G__37383;
continue;
}
} else {
var temp__5735__auto___37384__$1 = cljs.core.seq(seq__37219_37369);
if(temp__5735__auto___37384__$1){
var seq__37219_37385__$1 = temp__5735__auto___37384__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37219_37385__$1)){
var c__4550__auto___37386 = cljs.core.chunk_first(seq__37219_37385__$1);
var G__37387 = cljs.core.chunk_rest(seq__37219_37385__$1);
var G__37388 = c__4550__auto___37386;
var G__37389 = cljs.core.count(c__4550__auto___37386);
var G__37390 = (0);
seq__37219_37369 = G__37387;
chunk__37222_37370 = G__37388;
count__37223_37371 = G__37389;
i__37224_37372 = G__37390;
continue;
} else {
var node_37391 = cljs.core.first(seq__37219_37385__$1);
var path_match_37392 = shadow.cljs.devtools.client.browser.match_paths(node_37391.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37392)){
var new_link_37393 = (function (){var G__37230 = node_37391.cloneNode(true);
G__37230.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37392),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37230;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37392], 0));

goog.dom.insertSiblingAfter(new_link_37393,node_37391);

goog.dom.removeNode(node_37391);


var G__37394 = cljs.core.next(seq__37219_37385__$1);
var G__37395 = null;
var G__37396 = (0);
var G__37397 = (0);
seq__37219_37369 = G__37394;
chunk__37222_37370 = G__37395;
count__37223_37371 = G__37396;
i__37224_37372 = G__37397;
continue;
} else {
var G__37398 = cljs.core.next(seq__37219_37385__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__37219_37369 = G__37398;
chunk__37222_37370 = G__37399;
count__37223_37371 = G__37400;
i__37224_37372 = G__37401;
continue;
}
}
} else {
}
}
break;
}


var G__37402 = cljs.core.next(seq__37177__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__37177 = G__37402;
chunk__37179 = G__37403;
count__37180 = G__37404;
i__37181 = G__37405;
continue;
} else {
var G__37406 = cljs.core.next(seq__37177__$1);
var G__37407 = null;
var G__37408 = (0);
var G__37409 = (0);
seq__37177 = G__37406;
chunk__37179 = G__37407;
count__37180 = G__37408;
i__37181 = G__37409;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37231){
var map__37232 = p__37231;
var map__37232__$1 = (((((!((map__37232 == null))))?(((((map__37232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37232):map__37232);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37232,map__37232__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__37232,map__37232__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37234,done){
var map__37235 = p__37234;
var map__37235__$1 = (((((!((map__37235 == null))))?(((((map__37235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37235):map__37235);
var msg = map__37235__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37235,map__37235__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37237){
var map__37238 = p__37237;
var map__37238__$1 = (((((!((map__37238 == null))))?(((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37238):map__37238);
var src = map__37238__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37235,map__37235__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37235,map__37235__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37240){var e = e37240;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__37235,map__37235__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37241,done){
var map__37242 = p__37241;
var map__37242__$1 = (((((!((map__37242 == null))))?(((((map__37242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37242):map__37242);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37242,map__37242__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__37242,map__37242__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37244){
var map__37245 = p__37244;
var map__37245__$1 = (((((!((map__37245 == null))))?(((((map__37245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37245):map__37245);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37245__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37245__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37247,done){
var map__37248 = p__37247;
var map__37248__$1 = (((((!((map__37248 == null))))?(((((map__37248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37248):map__37248);
var msg = map__37248__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37250_37410 = type;
var G__37250_37411__$1 = (((G__37250_37410 instanceof cljs.core.Keyword))?G__37250_37410.fqn:null);
switch (G__37250_37411__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37251 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37252 = ((function (G__37251){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37251))
;
var G__37253 = "POST";
var G__37254 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37255 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37251,G__37252,G__37253,G__37254,G__37255);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37256){var e = e37256;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37415 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37415)){
var s_37416 = temp__5735__auto___37415;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37416.onclose = ((function (s_37416,temp__5735__auto___37415){
return (function (e){
return null;
});})(s_37416,temp__5735__auto___37415))
;

s_37416.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
