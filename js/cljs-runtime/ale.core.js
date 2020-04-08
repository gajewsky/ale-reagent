goog.provide('ale.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ale.components.header');
goog.require('ale.components.beers');
goog.require('ale.components.orders');
goog.require('ale.components.footer');
ale.core.app = (function ale$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ale.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ale.components.beers.beers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ale.components.orders.orders], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ale.components.footer.footer], null)], null);
});
ale.core.main = (function ale$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ale.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('ale.core.main', ale.core.main);

//# sourceMappingURL=ale.core.js.map
