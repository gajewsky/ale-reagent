goog.provide('ale.components.beers');
goog.require('cljs.core');
goog.require('ale.state');
ale.components.beers.add_to_cart = (function ale$components$beers$add_to_cart(beer){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ale.state.orders,cljs.core.update,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(beer),cljs.core.inc);

return console.log("Hello, world!");
});
ale.components.beers.beer_component = (function ale$components$beers$beer_component(beer){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.beer","div.beer",282018685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(beer)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.beer__artwork","img.beer__artwork",1093785705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(beer),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(beer)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.beer__body","div.beer__body",-1142491229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.beer__name","div.beer__name",447571047),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to cart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ale.components.beers.add_to_cart(beer);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(beer)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.beer__price","p.beer__price",-959083510),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(beer)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.beer_desc","p.beer_desc",1258735500),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(beer)], null)], null)], null);
});
ale.components.beers.beers = (function ale$components$beers$beers(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.beers","div.beers",-1260613465),(function (){var iter__4523__auto__ = (function ale$components$beers$beers_$_iter__28066(s__28068){
return (new cljs.core.LazySeq(null,(function (){
var s__28068__$1 = s__28068;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28068__$1);
if(temp__5735__auto__){
var s__28068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28068__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__28068__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__28071 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__28069 = (0);
while(true){
if((i__28069 < size__4522__auto__)){
var beer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__28069);
cljs.core.chunk_append(b__28071,ale.components.beers.beer_component(beer));

var G__28079 = (i__28069 + (1));
i__28069 = G__28079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28071),ale$components$beers$beers_$_iter__28066(cljs.core.chunk_rest(s__28068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28071),null);
}
} else {
var beer = cljs.core.first(s__28068__$2);
return cljs.core.cons(ale.components.beers.beer_component(beer),ale$components$beers$beers_$_iter__28066(cljs.core.rest(s__28068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.vals(cljs.core.deref(ale.state.beers)));
})()], null)], null);
});

//# sourceMappingURL=ale.components.beers.js.map
