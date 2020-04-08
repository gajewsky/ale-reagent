goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35010 = coll;
var G__35011 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35010,G__35011) : shadow.dom.lazy_native_coll_seq.call(null,G__35010,G__35011));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35080 = arguments.length;
switch (G__35080) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35098 = arguments.length;
switch (G__35098) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35100 = arguments.length;
switch (G__35100) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35105 = arguments.length;
switch (G__35105) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35120 = arguments.length;
switch (G__35120) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35124 = document;
var G__35125 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35124,G__35125);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35126 = shadow.dom.dom_node(parent);
var G__35127 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35126,G__35127);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35129 = shadow.dom.dom_node(el);
var G__35130 = cls;
return goog.dom.classlist.add(G__35129,G__35130);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35131 = shadow.dom.dom_node(el);
var G__35132 = cls;
return goog.dom.classlist.remove(G__35131,G__35132);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35134 = arguments.length;
switch (G__35134) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35143 = shadow.dom.dom_node(el);
var G__35144 = cls;
return goog.dom.classlist.toggle(G__35143,G__35144);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35150){if((e35150 instanceof Object)){
var e = e35150;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35150;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35151 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35154 = null;
var count__35155 = (0);
var i__35156 = (0);
while(true){
if((i__35156 < count__35155)){
var el = chunk__35154.cljs$core$IIndexed$_nth$arity$2(null,i__35156);
var handler_35676__$1 = ((function (seq__35151,chunk__35154,count__35155,i__35156,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35151,chunk__35154,count__35155,i__35156,el))
;
var G__35170_35678 = el;
var G__35171_35679 = cljs.core.name(ev);
var G__35172_35680 = handler_35676__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35170_35678,G__35171_35679,G__35172_35680) : shadow.dom.dom_listen.call(null,G__35170_35678,G__35171_35679,G__35172_35680));


var G__35681 = seq__35151;
var G__35682 = chunk__35154;
var G__35683 = count__35155;
var G__35684 = (i__35156 + (1));
seq__35151 = G__35681;
chunk__35154 = G__35682;
count__35155 = G__35683;
i__35156 = G__35684;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35151);
if(temp__5735__auto__){
var seq__35151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35151__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35151__$1);
var G__35685 = cljs.core.chunk_rest(seq__35151__$1);
var G__35686 = c__4550__auto__;
var G__35687 = cljs.core.count(c__4550__auto__);
var G__35688 = (0);
seq__35151 = G__35685;
chunk__35154 = G__35686;
count__35155 = G__35687;
i__35156 = G__35688;
continue;
} else {
var el = cljs.core.first(seq__35151__$1);
var handler_35689__$1 = ((function (seq__35151,chunk__35154,count__35155,i__35156,el,seq__35151__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35151,chunk__35154,count__35155,i__35156,el,seq__35151__$1,temp__5735__auto__))
;
var G__35175_35691 = el;
var G__35176_35692 = cljs.core.name(ev);
var G__35177_35693 = handler_35689__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35175_35691,G__35176_35692,G__35177_35693) : shadow.dom.dom_listen.call(null,G__35175_35691,G__35176_35692,G__35177_35693));


var G__35694 = cljs.core.next(seq__35151__$1);
var G__35695 = null;
var G__35696 = (0);
var G__35697 = (0);
seq__35151 = G__35694;
chunk__35154 = G__35695;
count__35155 = G__35696;
i__35156 = G__35697;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35181 = arguments.length;
switch (G__35181) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35194 = shadow.dom.dom_node(el);
var G__35195 = cljs.core.name(ev);
var G__35196 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35194,G__35195,G__35196) : shadow.dom.dom_listen.call(null,G__35194,G__35195,G__35196));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35200 = shadow.dom.dom_node(el);
var G__35201 = cljs.core.name(ev);
var G__35202 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35200,G__35201,G__35202) : shadow.dom.dom_listen_remove.call(null,G__35200,G__35201,G__35202));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35206 = cljs.core.seq(events);
var chunk__35207 = null;
var count__35208 = (0);
var i__35209 = (0);
while(true){
if((i__35209 < count__35208)){
var vec__35220 = chunk__35207.cljs$core$IIndexed$_nth$arity$2(null,i__35209);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35705 = seq__35206;
var G__35706 = chunk__35207;
var G__35707 = count__35208;
var G__35708 = (i__35209 + (1));
seq__35206 = G__35705;
chunk__35207 = G__35706;
count__35208 = G__35707;
i__35209 = G__35708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35206);
if(temp__5735__auto__){
var seq__35206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35206__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35206__$1);
var G__35709 = cljs.core.chunk_rest(seq__35206__$1);
var G__35710 = c__4550__auto__;
var G__35711 = cljs.core.count(c__4550__auto__);
var G__35712 = (0);
seq__35206 = G__35709;
chunk__35207 = G__35710;
count__35208 = G__35711;
i__35209 = G__35712;
continue;
} else {
var vec__35226 = cljs.core.first(seq__35206__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35714 = cljs.core.next(seq__35206__$1);
var G__35715 = null;
var G__35716 = (0);
var G__35717 = (0);
seq__35206 = G__35714;
chunk__35207 = G__35715;
count__35208 = G__35716;
i__35209 = G__35717;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35233 = cljs.core.seq(styles);
var chunk__35234 = null;
var count__35235 = (0);
var i__35236 = (0);
while(true){
if((i__35236 < count__35235)){
var vec__35255 = chunk__35234.cljs$core$IIndexed$_nth$arity$2(null,i__35236);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(1),null);
var G__35258_35719 = dom;
var G__35259_35720 = cljs.core.name(k);
var G__35260_35721 = (((v == null))?"":v);
goog.style.setStyle(G__35258_35719,G__35259_35720,G__35260_35721);


var G__35722 = seq__35233;
var G__35723 = chunk__35234;
var G__35724 = count__35235;
var G__35725 = (i__35236 + (1));
seq__35233 = G__35722;
chunk__35234 = G__35723;
count__35235 = G__35724;
i__35236 = G__35725;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35233);
if(temp__5735__auto__){
var seq__35233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35233__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35233__$1);
var G__35727 = cljs.core.chunk_rest(seq__35233__$1);
var G__35728 = c__4550__auto__;
var G__35729 = cljs.core.count(c__4550__auto__);
var G__35730 = (0);
seq__35233 = G__35727;
chunk__35234 = G__35728;
count__35235 = G__35729;
i__35236 = G__35730;
continue;
} else {
var vec__35264 = cljs.core.first(seq__35233__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(1),null);
var G__35267_35731 = dom;
var G__35268_35732 = cljs.core.name(k);
var G__35269_35733 = (((v == null))?"":v);
goog.style.setStyle(G__35267_35731,G__35268_35732,G__35269_35733);


var G__35735 = cljs.core.next(seq__35233__$1);
var G__35736 = null;
var G__35737 = (0);
var G__35738 = (0);
seq__35233 = G__35735;
chunk__35234 = G__35736;
count__35235 = G__35737;
i__35236 = G__35738;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35274_35739 = key;
var G__35274_35740__$1 = (((G__35274_35739 instanceof cljs.core.Keyword))?G__35274_35739.fqn:null);
switch (G__35274_35740__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35745 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35745,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35745,"aria-");
}
})())){
el.setAttribute(ks_35745,value);
} else {
(el[ks_35745] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35278 = shadow.dom.dom_node(el);
var G__35279 = cls;
return goog.dom.classlist.contains(G__35278,G__35279);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35280){
var map__35281 = p__35280;
var map__35281__$1 = (((((!((map__35281 == null))))?(((((map__35281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35281):map__35281);
var props = map__35281__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35281__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35283 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35286 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35286,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35286;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35288 = arguments.length;
switch (G__35288) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35289){
var vec__35290 = p__35289;
var seq__35291 = cljs.core.seq(vec__35290);
var first__35292 = cljs.core.first(seq__35291);
var seq__35291__$1 = cljs.core.next(seq__35291);
var nn = first__35292;
var first__35292__$1 = cljs.core.first(seq__35291__$1);
var seq__35291__$2 = cljs.core.next(seq__35291__$1);
var np = first__35292__$1;
var nc = seq__35291__$2;
var node = vec__35290;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35293 = nn;
var G__35294 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35293,G__35294) : create_fn.call(null,G__35293,G__35294));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35295 = nn;
var G__35296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35295,G__35296) : create_fn.call(null,G__35295,G__35296));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35297 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(1),null);
var seq__35300_35760 = cljs.core.seq(node_children);
var chunk__35301_35761 = null;
var count__35302_35762 = (0);
var i__35303_35763 = (0);
while(true){
if((i__35303_35763 < count__35302_35762)){
var child_struct_35764 = chunk__35301_35761.cljs$core$IIndexed$_nth$arity$2(null,i__35303_35763);
var children_35765 = shadow.dom.dom_node(child_struct_35764);
if(cljs.core.seq_QMARK_(children_35765)){
var seq__35321_35766 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35765));
var chunk__35323_35767 = null;
var count__35324_35768 = (0);
var i__35325_35769 = (0);
while(true){
if((i__35325_35769 < count__35324_35768)){
var child_35770 = chunk__35323_35767.cljs$core$IIndexed$_nth$arity$2(null,i__35325_35769);
if(cljs.core.truth_(child_35770)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35770);


var G__35773 = seq__35321_35766;
var G__35774 = chunk__35323_35767;
var G__35775 = count__35324_35768;
var G__35776 = (i__35325_35769 + (1));
seq__35321_35766 = G__35773;
chunk__35323_35767 = G__35774;
count__35324_35768 = G__35775;
i__35325_35769 = G__35776;
continue;
} else {
var G__35778 = seq__35321_35766;
var G__35779 = chunk__35323_35767;
var G__35780 = count__35324_35768;
var G__35781 = (i__35325_35769 + (1));
seq__35321_35766 = G__35778;
chunk__35323_35767 = G__35779;
count__35324_35768 = G__35780;
i__35325_35769 = G__35781;
continue;
}
} else {
var temp__5735__auto___35782 = cljs.core.seq(seq__35321_35766);
if(temp__5735__auto___35782){
var seq__35321_35784__$1 = temp__5735__auto___35782;
if(cljs.core.chunked_seq_QMARK_(seq__35321_35784__$1)){
var c__4550__auto___35785 = cljs.core.chunk_first(seq__35321_35784__$1);
var G__35786 = cljs.core.chunk_rest(seq__35321_35784__$1);
var G__35787 = c__4550__auto___35785;
var G__35788 = cljs.core.count(c__4550__auto___35785);
var G__35789 = (0);
seq__35321_35766 = G__35786;
chunk__35323_35767 = G__35787;
count__35324_35768 = G__35788;
i__35325_35769 = G__35789;
continue;
} else {
var child_35790 = cljs.core.first(seq__35321_35784__$1);
if(cljs.core.truth_(child_35790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35790);


var G__35792 = cljs.core.next(seq__35321_35784__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__35321_35766 = G__35792;
chunk__35323_35767 = G__35793;
count__35324_35768 = G__35794;
i__35325_35769 = G__35795;
continue;
} else {
var G__35796 = cljs.core.next(seq__35321_35784__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35321_35766 = G__35796;
chunk__35323_35767 = G__35797;
count__35324_35768 = G__35798;
i__35325_35769 = G__35799;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35765);
}


var G__35801 = seq__35300_35760;
var G__35802 = chunk__35301_35761;
var G__35803 = count__35302_35762;
var G__35804 = (i__35303_35763 + (1));
seq__35300_35760 = G__35801;
chunk__35301_35761 = G__35802;
count__35302_35762 = G__35803;
i__35303_35763 = G__35804;
continue;
} else {
var temp__5735__auto___35805 = cljs.core.seq(seq__35300_35760);
if(temp__5735__auto___35805){
var seq__35300_35806__$1 = temp__5735__auto___35805;
if(cljs.core.chunked_seq_QMARK_(seq__35300_35806__$1)){
var c__4550__auto___35808 = cljs.core.chunk_first(seq__35300_35806__$1);
var G__35809 = cljs.core.chunk_rest(seq__35300_35806__$1);
var G__35810 = c__4550__auto___35808;
var G__35811 = cljs.core.count(c__4550__auto___35808);
var G__35812 = (0);
seq__35300_35760 = G__35809;
chunk__35301_35761 = G__35810;
count__35302_35762 = G__35811;
i__35303_35763 = G__35812;
continue;
} else {
var child_struct_35813 = cljs.core.first(seq__35300_35806__$1);
var children_35814 = shadow.dom.dom_node(child_struct_35813);
if(cljs.core.seq_QMARK_(children_35814)){
var seq__35328_35815 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35814));
var chunk__35330_35816 = null;
var count__35331_35817 = (0);
var i__35332_35818 = (0);
while(true){
if((i__35332_35818 < count__35331_35817)){
var child_35821 = chunk__35330_35816.cljs$core$IIndexed$_nth$arity$2(null,i__35332_35818);
if(cljs.core.truth_(child_35821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35821);


var G__35823 = seq__35328_35815;
var G__35824 = chunk__35330_35816;
var G__35825 = count__35331_35817;
var G__35826 = (i__35332_35818 + (1));
seq__35328_35815 = G__35823;
chunk__35330_35816 = G__35824;
count__35331_35817 = G__35825;
i__35332_35818 = G__35826;
continue;
} else {
var G__35827 = seq__35328_35815;
var G__35828 = chunk__35330_35816;
var G__35829 = count__35331_35817;
var G__35830 = (i__35332_35818 + (1));
seq__35328_35815 = G__35827;
chunk__35330_35816 = G__35828;
count__35331_35817 = G__35829;
i__35332_35818 = G__35830;
continue;
}
} else {
var temp__5735__auto___35831__$1 = cljs.core.seq(seq__35328_35815);
if(temp__5735__auto___35831__$1){
var seq__35328_35833__$1 = temp__5735__auto___35831__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35328_35833__$1)){
var c__4550__auto___35834 = cljs.core.chunk_first(seq__35328_35833__$1);
var G__35836 = cljs.core.chunk_rest(seq__35328_35833__$1);
var G__35837 = c__4550__auto___35834;
var G__35838 = cljs.core.count(c__4550__auto___35834);
var G__35839 = (0);
seq__35328_35815 = G__35836;
chunk__35330_35816 = G__35837;
count__35331_35817 = G__35838;
i__35332_35818 = G__35839;
continue;
} else {
var child_35840 = cljs.core.first(seq__35328_35833__$1);
if(cljs.core.truth_(child_35840)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35840);


var G__35842 = cljs.core.next(seq__35328_35833__$1);
var G__35843 = null;
var G__35844 = (0);
var G__35845 = (0);
seq__35328_35815 = G__35842;
chunk__35330_35816 = G__35843;
count__35331_35817 = G__35844;
i__35332_35818 = G__35845;
continue;
} else {
var G__35846 = cljs.core.next(seq__35328_35833__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35328_35815 = G__35846;
chunk__35330_35816 = G__35847;
count__35331_35817 = G__35848;
i__35332_35818 = G__35849;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35814);
}


var G__35850 = cljs.core.next(seq__35300_35806__$1);
var G__35851 = null;
var G__35852 = (0);
var G__35853 = (0);
seq__35300_35760 = G__35850;
chunk__35301_35761 = G__35851;
count__35302_35762 = G__35852;
i__35303_35763 = G__35853;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35334 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35334);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35336 = cljs.core.seq(node);
var chunk__35337 = null;
var count__35338 = (0);
var i__35339 = (0);
while(true){
if((i__35339 < count__35338)){
var n = chunk__35337.cljs$core$IIndexed$_nth$arity$2(null,i__35339);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35873 = seq__35336;
var G__35874 = chunk__35337;
var G__35875 = count__35338;
var G__35876 = (i__35339 + (1));
seq__35336 = G__35873;
chunk__35337 = G__35874;
count__35338 = G__35875;
i__35339 = G__35876;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35336);
if(temp__5735__auto__){
var seq__35336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35336__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35336__$1);
var G__35878 = cljs.core.chunk_rest(seq__35336__$1);
var G__35879 = c__4550__auto__;
var G__35880 = cljs.core.count(c__4550__auto__);
var G__35881 = (0);
seq__35336 = G__35878;
chunk__35337 = G__35879;
count__35338 = G__35880;
i__35339 = G__35881;
continue;
} else {
var n = cljs.core.first(seq__35336__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35884 = cljs.core.next(seq__35336__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35336 = G__35884;
chunk__35337 = G__35885;
count__35338 = G__35886;
i__35339 = G__35887;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35341 = shadow.dom.dom_node(new$);
var G__35342 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35341,G__35342);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35344 = arguments.length;
switch (G__35344) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35351 = arguments.length;
switch (G__35351) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35359 = arguments.length;
switch (G__35359) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35903 = arguments.length;
var i__4731__auto___35904 = (0);
while(true){
if((i__4731__auto___35904 < len__4730__auto___35903)){
args__4736__auto__.push((arguments[i__4731__auto___35904]));

var G__35905 = (i__4731__auto___35904 + (1));
i__4731__auto___35904 = G__35905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35372_35907 = cljs.core.seq(nodes);
var chunk__35373_35908 = null;
var count__35374_35909 = (0);
var i__35375_35910 = (0);
while(true){
if((i__35375_35910 < count__35374_35909)){
var node_35911 = chunk__35373_35908.cljs$core$IIndexed$_nth$arity$2(null,i__35375_35910);
fragment.appendChild(shadow.dom._to_dom(node_35911));


var G__35913 = seq__35372_35907;
var G__35914 = chunk__35373_35908;
var G__35915 = count__35374_35909;
var G__35916 = (i__35375_35910 + (1));
seq__35372_35907 = G__35913;
chunk__35373_35908 = G__35914;
count__35374_35909 = G__35915;
i__35375_35910 = G__35916;
continue;
} else {
var temp__5735__auto___35917 = cljs.core.seq(seq__35372_35907);
if(temp__5735__auto___35917){
var seq__35372_35918__$1 = temp__5735__auto___35917;
if(cljs.core.chunked_seq_QMARK_(seq__35372_35918__$1)){
var c__4550__auto___35919 = cljs.core.chunk_first(seq__35372_35918__$1);
var G__35920 = cljs.core.chunk_rest(seq__35372_35918__$1);
var G__35921 = c__4550__auto___35919;
var G__35922 = cljs.core.count(c__4550__auto___35919);
var G__35923 = (0);
seq__35372_35907 = G__35920;
chunk__35373_35908 = G__35921;
count__35374_35909 = G__35922;
i__35375_35910 = G__35923;
continue;
} else {
var node_35924 = cljs.core.first(seq__35372_35918__$1);
fragment.appendChild(shadow.dom._to_dom(node_35924));


var G__35925 = cljs.core.next(seq__35372_35918__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35372_35907 = G__35925;
chunk__35373_35908 = G__35926;
count__35374_35909 = G__35927;
i__35375_35910 = G__35928;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35370));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35380_35929 = cljs.core.seq(scripts);
var chunk__35381_35930 = null;
var count__35382_35931 = (0);
var i__35383_35932 = (0);
while(true){
if((i__35383_35932 < count__35382_35931)){
var vec__35392_35933 = chunk__35381_35930.cljs$core$IIndexed$_nth$arity$2(null,i__35383_35932);
var script_tag_35934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392_35933,(0),null);
var script_body_35935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392_35933,(1),null);
eval(script_body_35935);


var G__35936 = seq__35380_35929;
var G__35937 = chunk__35381_35930;
var G__35938 = count__35382_35931;
var G__35939 = (i__35383_35932 + (1));
seq__35380_35929 = G__35936;
chunk__35381_35930 = G__35937;
count__35382_35931 = G__35938;
i__35383_35932 = G__35939;
continue;
} else {
var temp__5735__auto___35940 = cljs.core.seq(seq__35380_35929);
if(temp__5735__auto___35940){
var seq__35380_35941__$1 = temp__5735__auto___35940;
if(cljs.core.chunked_seq_QMARK_(seq__35380_35941__$1)){
var c__4550__auto___35946 = cljs.core.chunk_first(seq__35380_35941__$1);
var G__35947 = cljs.core.chunk_rest(seq__35380_35941__$1);
var G__35948 = c__4550__auto___35946;
var G__35949 = cljs.core.count(c__4550__auto___35946);
var G__35950 = (0);
seq__35380_35929 = G__35947;
chunk__35381_35930 = G__35948;
count__35382_35931 = G__35949;
i__35383_35932 = G__35950;
continue;
} else {
var vec__35399_35951 = cljs.core.first(seq__35380_35941__$1);
var script_tag_35952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399_35951,(0),null);
var script_body_35953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399_35951,(1),null);
eval(script_body_35953);


var G__35958 = cljs.core.next(seq__35380_35941__$1);
var G__35959 = null;
var G__35960 = (0);
var G__35961 = (0);
seq__35380_35929 = G__35958;
chunk__35381_35930 = G__35959;
count__35382_35931 = G__35960;
i__35383_35932 = G__35961;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35403){
var vec__35404 = p__35403;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35414 = shadow.dom.dom_node(el);
var G__35415 = cls;
return goog.dom.getAncestorByClass(G__35414,G__35415);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35417 = arguments.length;
switch (G__35417) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35418 = shadow.dom.dom_node(el);
var G__35419 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35418,G__35419);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35421 = shadow.dom.dom_node(el);
var G__35422 = cljs.core.name(tag);
var G__35423 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35421,G__35422,G__35423);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35424 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35424);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35426 = shadow.dom.dom_node(dom);
var G__35427 = value;
return goog.dom.forms.setValue(G__35426,G__35427);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35432 = cljs.core.seq(style_keys);
var chunk__35433 = null;
var count__35434 = (0);
var i__35435 = (0);
while(true){
if((i__35435 < count__35434)){
var it = chunk__35433.cljs$core$IIndexed$_nth$arity$2(null,i__35435);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35978 = seq__35432;
var G__35979 = chunk__35433;
var G__35980 = count__35434;
var G__35981 = (i__35435 + (1));
seq__35432 = G__35978;
chunk__35433 = G__35979;
count__35434 = G__35980;
i__35435 = G__35981;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35432);
if(temp__5735__auto__){
var seq__35432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35432__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35432__$1);
var G__35982 = cljs.core.chunk_rest(seq__35432__$1);
var G__35983 = c__4550__auto__;
var G__35984 = cljs.core.count(c__4550__auto__);
var G__35985 = (0);
seq__35432 = G__35982;
chunk__35433 = G__35983;
count__35434 = G__35984;
i__35435 = G__35985;
continue;
} else {
var it = cljs.core.first(seq__35432__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35986 = cljs.core.next(seq__35432__$1);
var G__35987 = null;
var G__35988 = (0);
var G__35989 = (0);
seq__35432 = G__35986;
chunk__35433 = G__35987;
count__35434 = G__35988;
i__35435 = G__35989;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35439,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35443 = k35439;
var G__35443__$1 = (((G__35443 instanceof cljs.core.Keyword))?G__35443.fqn:null);
switch (G__35443__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35439,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35444){
var vec__35445 = p__35444;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35445,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35445,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35438){
var self__ = this;
var G__35438__$1 = this;
return (new cljs.core.RecordIter((0),G__35438__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35449 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35449(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35440,other35441){
var self__ = this;
var this35440__$1 = this;
return (((!((other35441 == null)))) && ((this35440__$1.constructor === other35441.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35440__$1.x,other35441.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35440__$1.y,other35441.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35440__$1.__extmap,other35441.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35438){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35451 = cljs.core.keyword_identical_QMARK_;
var expr__35452 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35454 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35455 = expr__35452;
return (pred__35451.cljs$core$IFn$_invoke$arity$2 ? pred__35451.cljs$core$IFn$_invoke$arity$2(G__35454,G__35455) : pred__35451.call(null,G__35454,G__35455));
})())){
return (new shadow.dom.Coordinate(G__35438,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35456 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35457 = expr__35452;
return (pred__35451.cljs$core$IFn$_invoke$arity$2 ? pred__35451.cljs$core$IFn$_invoke$arity$2(G__35456,G__35457) : pred__35451.call(null,G__35456,G__35457));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35438,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35438),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35438){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35438,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35442){
var extmap__4424__auto__ = (function (){var G__35458 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35442,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35442)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35458);
} else {
return G__35458;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35442),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35442),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35459 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35459);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35460 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35460);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35461 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35461);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35463,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35467 = k35463;
var G__35467__$1 = (((G__35467 instanceof cljs.core.Keyword))?G__35467.fqn:null);
switch (G__35467__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35463,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35469){
var vec__35470 = p__35469;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35470,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35470,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35462){
var self__ = this;
var G__35462__$1 = this;
return (new cljs.core.RecordIter((0),G__35462__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35488 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35488(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35464,other35465){
var self__ = this;
var this35464__$1 = this;
return (((!((other35465 == null)))) && ((this35464__$1.constructor === other35465.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35464__$1.w,other35465.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35464__$1.h,other35465.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35464__$1.__extmap,other35465.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35462){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35489 = cljs.core.keyword_identical_QMARK_;
var expr__35490 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35492 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35493 = expr__35490;
return (pred__35489.cljs$core$IFn$_invoke$arity$2 ? pred__35489.cljs$core$IFn$_invoke$arity$2(G__35492,G__35493) : pred__35489.call(null,G__35492,G__35493));
})())){
return (new shadow.dom.Size(G__35462,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35494 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35495 = expr__35490;
return (pred__35489.cljs$core$IFn$_invoke$arity$2 ? pred__35489.cljs$core$IFn$_invoke$arity$2(G__35494,G__35495) : pred__35489.call(null,G__35494,G__35495));
})())){
return (new shadow.dom.Size(self__.w,G__35462,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35462),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35462){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35462,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35466){
var extmap__4424__auto__ = (function (){var G__35499 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35466,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35466)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35499);
} else {
return G__35499;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35466),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35466),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35503 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35503);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36007 = (i + (1));
var G__36008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36007;
ret = G__36008;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35512){
var vec__35513 = p__35512;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35513,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35517 = arguments.length;
switch (G__35517) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35519_36010 = new_node;
var G__35520_36011 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35519_36010,G__35520_36011);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35521_36012 = new_node;
var G__35522_36013 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35521_36012,G__35522_36013);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36016 = ps;
var G__36017 = (i + (1));
el__$1 = G__36016;
i = G__36017;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35529 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35529);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35538 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35538);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35543 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35543);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35546 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35546,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35546,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35546,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35549_36020 = cljs.core.seq(props);
var chunk__35550_36021 = null;
var count__35551_36022 = (0);
var i__35552_36023 = (0);
while(true){
if((i__35552_36023 < count__35551_36022)){
var vec__35562_36024 = chunk__35550_36021.cljs$core$IIndexed$_nth$arity$2(null,i__35552_36023);
var k_36025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35562_36024,(0),null);
var v_36026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35562_36024,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36025);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36025),v_36026);


var G__36027 = seq__35549_36020;
var G__36028 = chunk__35550_36021;
var G__36029 = count__35551_36022;
var G__36030 = (i__35552_36023 + (1));
seq__35549_36020 = G__36027;
chunk__35550_36021 = G__36028;
count__35551_36022 = G__36029;
i__35552_36023 = G__36030;
continue;
} else {
var temp__5735__auto___36031 = cljs.core.seq(seq__35549_36020);
if(temp__5735__auto___36031){
var seq__35549_36032__$1 = temp__5735__auto___36031;
if(cljs.core.chunked_seq_QMARK_(seq__35549_36032__$1)){
var c__4550__auto___36033 = cljs.core.chunk_first(seq__35549_36032__$1);
var G__36034 = cljs.core.chunk_rest(seq__35549_36032__$1);
var G__36035 = c__4550__auto___36033;
var G__36036 = cljs.core.count(c__4550__auto___36033);
var G__36037 = (0);
seq__35549_36020 = G__36034;
chunk__35550_36021 = G__36035;
count__35551_36022 = G__36036;
i__35552_36023 = G__36037;
continue;
} else {
var vec__35565_36038 = cljs.core.first(seq__35549_36032__$1);
var k_36039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565_36038,(0),null);
var v_36040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565_36038,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36039);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36039),v_36040);


var G__36041 = cljs.core.next(seq__35549_36032__$1);
var G__36042 = null;
var G__36043 = (0);
var G__36044 = (0);
seq__35549_36020 = G__36041;
chunk__35550_36021 = G__36042;
count__35551_36022 = G__36043;
i__35552_36023 = G__36044;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35571 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(1),null);
var seq__35575_36045 = cljs.core.seq(node_children);
var chunk__35577_36046 = null;
var count__35578_36047 = (0);
var i__35579_36048 = (0);
while(true){
if((i__35579_36048 < count__35578_36047)){
var child_struct_36049 = chunk__35577_36046.cljs$core$IIndexed$_nth$arity$2(null,i__35579_36048);
if((!((child_struct_36049 == null)))){
if(typeof child_struct_36049 === 'string'){
var text_36050 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36050),child_struct_36049].join(''));
} else {
var children_36051 = shadow.dom.svg_node(child_struct_36049);
if(cljs.core.seq_QMARK_(children_36051)){
var seq__35604_36052 = cljs.core.seq(children_36051);
var chunk__35606_36053 = null;
var count__35607_36054 = (0);
var i__35608_36055 = (0);
while(true){
if((i__35608_36055 < count__35607_36054)){
var child_36056 = chunk__35606_36053.cljs$core$IIndexed$_nth$arity$2(null,i__35608_36055);
if(cljs.core.truth_(child_36056)){
node.appendChild(child_36056);


var G__36057 = seq__35604_36052;
var G__36058 = chunk__35606_36053;
var G__36059 = count__35607_36054;
var G__36060 = (i__35608_36055 + (1));
seq__35604_36052 = G__36057;
chunk__35606_36053 = G__36058;
count__35607_36054 = G__36059;
i__35608_36055 = G__36060;
continue;
} else {
var G__36061 = seq__35604_36052;
var G__36062 = chunk__35606_36053;
var G__36063 = count__35607_36054;
var G__36064 = (i__35608_36055 + (1));
seq__35604_36052 = G__36061;
chunk__35606_36053 = G__36062;
count__35607_36054 = G__36063;
i__35608_36055 = G__36064;
continue;
}
} else {
var temp__5735__auto___36065 = cljs.core.seq(seq__35604_36052);
if(temp__5735__auto___36065){
var seq__35604_36066__$1 = temp__5735__auto___36065;
if(cljs.core.chunked_seq_QMARK_(seq__35604_36066__$1)){
var c__4550__auto___36067 = cljs.core.chunk_first(seq__35604_36066__$1);
var G__36068 = cljs.core.chunk_rest(seq__35604_36066__$1);
var G__36069 = c__4550__auto___36067;
var G__36070 = cljs.core.count(c__4550__auto___36067);
var G__36071 = (0);
seq__35604_36052 = G__36068;
chunk__35606_36053 = G__36069;
count__35607_36054 = G__36070;
i__35608_36055 = G__36071;
continue;
} else {
var child_36072 = cljs.core.first(seq__35604_36066__$1);
if(cljs.core.truth_(child_36072)){
node.appendChild(child_36072);


var G__36073 = cljs.core.next(seq__35604_36066__$1);
var G__36074 = null;
var G__36075 = (0);
var G__36076 = (0);
seq__35604_36052 = G__36073;
chunk__35606_36053 = G__36074;
count__35607_36054 = G__36075;
i__35608_36055 = G__36076;
continue;
} else {
var G__36077 = cljs.core.next(seq__35604_36066__$1);
var G__36078 = null;
var G__36079 = (0);
var G__36080 = (0);
seq__35604_36052 = G__36077;
chunk__35606_36053 = G__36078;
count__35607_36054 = G__36079;
i__35608_36055 = G__36080;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36051);
}
}


var G__36081 = seq__35575_36045;
var G__36082 = chunk__35577_36046;
var G__36083 = count__35578_36047;
var G__36084 = (i__35579_36048 + (1));
seq__35575_36045 = G__36081;
chunk__35577_36046 = G__36082;
count__35578_36047 = G__36083;
i__35579_36048 = G__36084;
continue;
} else {
var G__36085 = seq__35575_36045;
var G__36086 = chunk__35577_36046;
var G__36087 = count__35578_36047;
var G__36088 = (i__35579_36048 + (1));
seq__35575_36045 = G__36085;
chunk__35577_36046 = G__36086;
count__35578_36047 = G__36087;
i__35579_36048 = G__36088;
continue;
}
} else {
var temp__5735__auto___36093 = cljs.core.seq(seq__35575_36045);
if(temp__5735__auto___36093){
var seq__35575_36094__$1 = temp__5735__auto___36093;
if(cljs.core.chunked_seq_QMARK_(seq__35575_36094__$1)){
var c__4550__auto___36095 = cljs.core.chunk_first(seq__35575_36094__$1);
var G__36096 = cljs.core.chunk_rest(seq__35575_36094__$1);
var G__36097 = c__4550__auto___36095;
var G__36098 = cljs.core.count(c__4550__auto___36095);
var G__36099 = (0);
seq__35575_36045 = G__36096;
chunk__35577_36046 = G__36097;
count__35578_36047 = G__36098;
i__35579_36048 = G__36099;
continue;
} else {
var child_struct_36100 = cljs.core.first(seq__35575_36094__$1);
if((!((child_struct_36100 == null)))){
if(typeof child_struct_36100 === 'string'){
var text_36101 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36101),child_struct_36100].join(''));
} else {
var children_36102 = shadow.dom.svg_node(child_struct_36100);
if(cljs.core.seq_QMARK_(children_36102)){
var seq__35617_36103 = cljs.core.seq(children_36102);
var chunk__35619_36104 = null;
var count__35620_36105 = (0);
var i__35621_36106 = (0);
while(true){
if((i__35621_36106 < count__35620_36105)){
var child_36107 = chunk__35619_36104.cljs$core$IIndexed$_nth$arity$2(null,i__35621_36106);
if(cljs.core.truth_(child_36107)){
node.appendChild(child_36107);


var G__36108 = seq__35617_36103;
var G__36109 = chunk__35619_36104;
var G__36110 = count__35620_36105;
var G__36111 = (i__35621_36106 + (1));
seq__35617_36103 = G__36108;
chunk__35619_36104 = G__36109;
count__35620_36105 = G__36110;
i__35621_36106 = G__36111;
continue;
} else {
var G__36112 = seq__35617_36103;
var G__36113 = chunk__35619_36104;
var G__36114 = count__35620_36105;
var G__36115 = (i__35621_36106 + (1));
seq__35617_36103 = G__36112;
chunk__35619_36104 = G__36113;
count__35620_36105 = G__36114;
i__35621_36106 = G__36115;
continue;
}
} else {
var temp__5735__auto___36116__$1 = cljs.core.seq(seq__35617_36103);
if(temp__5735__auto___36116__$1){
var seq__35617_36117__$1 = temp__5735__auto___36116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35617_36117__$1)){
var c__4550__auto___36118 = cljs.core.chunk_first(seq__35617_36117__$1);
var G__36119 = cljs.core.chunk_rest(seq__35617_36117__$1);
var G__36120 = c__4550__auto___36118;
var G__36121 = cljs.core.count(c__4550__auto___36118);
var G__36122 = (0);
seq__35617_36103 = G__36119;
chunk__35619_36104 = G__36120;
count__35620_36105 = G__36121;
i__35621_36106 = G__36122;
continue;
} else {
var child_36123 = cljs.core.first(seq__35617_36117__$1);
if(cljs.core.truth_(child_36123)){
node.appendChild(child_36123);


var G__36124 = cljs.core.next(seq__35617_36117__$1);
var G__36125 = null;
var G__36126 = (0);
var G__36127 = (0);
seq__35617_36103 = G__36124;
chunk__35619_36104 = G__36125;
count__35620_36105 = G__36126;
i__35621_36106 = G__36127;
continue;
} else {
var G__36128 = cljs.core.next(seq__35617_36117__$1);
var G__36129 = null;
var G__36130 = (0);
var G__36131 = (0);
seq__35617_36103 = G__36128;
chunk__35619_36104 = G__36129;
count__35620_36105 = G__36130;
i__35621_36106 = G__36131;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36102);
}
}


var G__36132 = cljs.core.next(seq__35575_36094__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__35575_36045 = G__36132;
chunk__35577_36046 = G__36133;
count__35578_36047 = G__36134;
i__35579_36048 = G__36135;
continue;
} else {
var G__36136 = cljs.core.next(seq__35575_36094__$1);
var G__36137 = null;
var G__36138 = (0);
var G__36139 = (0);
seq__35575_36045 = G__36136;
chunk__35577_36046 = G__36137;
count__35578_36047 = G__36138;
i__35579_36048 = G__36139;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35627_36140 = shadow.dom._to_svg;
var G__35628_36141 = "string";
var G__35629_36142 = ((function (G__35627_36140,G__35628_36141){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35627_36140,G__35628_36141))
;
goog.object.set(G__35627_36140,G__35628_36141,G__35629_36142);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35635_36143 = shadow.dom._to_svg;
var G__35636_36144 = "null";
var G__35637_36145 = ((function (G__35635_36143,G__35636_36144){
return (function (_){
return null;
});})(G__35635_36143,G__35636_36144))
;
goog.object.set(G__35635_36143,G__35636_36144,G__35637_36145);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36146 = arguments.length;
var i__4731__auto___36147 = (0);
while(true){
if((i__4731__auto___36147 < len__4730__auto___36146)){
args__4736__auto__.push((arguments[i__4731__auto___36147]));

var G__36148 = (i__4731__auto___36147 + (1));
i__4731__auto___36147 = G__36148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35638){
var G__35639 = cljs.core.first(seq35638);
var seq35638__$1 = cljs.core.next(seq35638);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35639,seq35638__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35641 = arguments.length;
switch (G__35641) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35642_36153 = shadow.dom.dom_node(el);
var G__35643_36154 = cljs.core.name(event);
var G__35644_36155 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35642_36153,G__35643_36154,G__35644_36155) : shadow.dom.dom_listen.call(null,G__35642_36153,G__35643_36154,G__35644_36155));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33377__auto___36156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___36156,buf,chan,event_fn){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___36156,buf,chan,event_fn){
return (function (state_35649){
var state_val_35650 = (state_35649[(1)]);
if((state_val_35650 === (1))){
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35649__$1,(2),once_or_cleanup);
} else {
if((state_val_35650 === (2))){
var inst_35646 = (state_35649[(2)]);
var inst_35647 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35649__$1 = (function (){var statearr_35651 = state_35649;
(statearr_35651[(7)] = inst_35646);

return statearr_35651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35649__$1,inst_35647);
} else {
return null;
}
}
});})(c__33377__auto___36156,buf,chan,event_fn))
;
return ((function (switch__33289__auto__,c__33377__auto___36156,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33290__auto__ = null;
var shadow$dom$state_machine__33290__auto____0 = (function (){
var statearr_35652 = [null,null,null,null,null,null,null,null];
(statearr_35652[(0)] = shadow$dom$state_machine__33290__auto__);

(statearr_35652[(1)] = (1));

return statearr_35652;
});
var shadow$dom$state_machine__33290__auto____1 = (function (state_35649){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_35649);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e35653){if((e35653 instanceof Object)){
var ex__33293__auto__ = e35653;
var statearr_35654_36160 = state_35649;
(statearr_35654_36160[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36161 = state_35649;
state_35649 = G__36161;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
shadow$dom$state_machine__33290__auto__ = function(state_35649){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33290__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33290__auto____1.call(this,state_35649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33290__auto____0;
shadow$dom$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33290__auto____1;
return shadow$dom$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___36156,buf,chan,event_fn))
})();
var state__33379__auto__ = (function (){var statearr_35655 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_35655[(6)] = c__33377__auto___36156);

return statearr_35655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___36156,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
