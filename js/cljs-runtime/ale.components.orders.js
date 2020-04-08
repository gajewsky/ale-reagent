goog.provide('ale.components.orders');
goog.require('cljs.core');
goog.require('ale.state');
ale.components.orders.remove_order = (function ale$components$orders$remove_order(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ale.state.orders,cljs.core.dissoc,id);
});
ale.components.orders.remove_all = (function ale$components$orders$remove_all(){
return cljs.core.reset_BANG_(ale.state.orders,cljs.core.PersistentArrayMap.EMPTY);
});
ale.components.orders.total = (function ale$components$orders$total(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27306){
var vec__27307 = p__27306;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(1),null);
return (quantity * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ale.state.beers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)));
}),cljs.core.deref(ale.state.orders)));
});
ale.components.orders.order_component = (function ale$components$orders$order_component(id,quantity){
var map__27310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ale.state.beers),id);
var map__27310__$1 = (((((!((map__27310 == null))))?(((((map__27310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27310):map__27310);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27310__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27310__$1,new cljs.core.Keyword(null,"price","price",22129180));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),(price * quantity)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27310,map__27310__$1,img,name,price){
return (function (){
return ale.components.orders.remove_order(id);
});})(map__27310,map__27310__$1,img,name,price))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null)], null);
});
ale.components.orders.orders = (function ale$components$orders$orders(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var iter__4523__auto__ = (function ale$components$orders$orders_$_iter__27312(s__27313){
return (new cljs.core.LazySeq(null,(function (){
var s__27313__$1 = s__27313;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27313__$1);
if(temp__5735__auto__){
var s__27313__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27313__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__27313__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__27315 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__27314 = (0);
while(true){
if((i__27314 < size__4522__auto__)){
var vec__27316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__27314);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27316,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27316,(1),null);
cljs.core.chunk_append(b__27315,ale.components.orders.order_component(id,quantity));

var G__27322 = (i__27314 + (1));
i__27314 = G__27322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27315),ale$components$orders$orders_$_iter__27312(cljs.core.chunk_rest(s__27313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27315),null);
}
} else {
var vec__27319 = cljs.core.first(s__27313__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(1),null);
return cljs.core.cons(ale.components.orders.order_component(id,quantity),ale$components$orders$orders_$_iter__27312(cljs.core.rest(s__27313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(ale.state.orders));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.total","div.total",1164460301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),ale.components.orders.total()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ale.components.orders.remove_all();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--delete","i.icon.icon--delete",1739225438)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=ale.components.orders.js.map
